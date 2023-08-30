import PropTypes from 'prop-types';
import './styles.css';

CustomButton.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  useId: PropTypes.bool,
  sx: PropTypes.object,
};

export default function CustomButton({ value, onPress, variant, useId, sx }) {
  return (
    <button
      type='button'
      style={sx && sx}
      id={!useId && 'btn'}
      className={variant ? variant : 'default-btn'}
      onClick={onPress}>
      {value}
    </button>
  );
}
