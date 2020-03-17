import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/perspective.css';




<Tippy content={<h3>{a.Answer}</h3>}
  animation="perspective"
  placement="bottom"
  trigger="click"
  theme="light"
  interactive={true}
  inertia={true}
  arrow={false}
  duration={[350, 200]}>
  <button>Answer</button>
</Tippy> 