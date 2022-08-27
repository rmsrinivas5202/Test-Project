import React from 'react';
const Button = () => {
  return(
  <div>
  <form onsubmit="console.log('You clicked submit.'); return false">
<button type="submit" class="btn btn-danger">
Explore products
</button>
</form>
</div>

  );
}
export default Button;
