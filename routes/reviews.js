cat > tabib-backend/routes/reviews.js << 'EOF'
const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  createReview,
  getDoctorReviews,
  canReview
} = require('../controllers/reviewController');

router.post('/', auth, createReview);
router.get('/doctor/:doctorId', getDoctorReviews);
router.get('/can-review/:appointmentId', auth, canReview);

module.exports = router;
EOF