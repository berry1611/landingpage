import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    const isCustomToken = token.length < 500;
    let decodedToken;
    if (isCustomToken) {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedToken.id;
    } else {
      decodedToken = jwt.decode(token);
      req.userId = decodedToken.sub;
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export default authentication;
