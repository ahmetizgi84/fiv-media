import React from 'react';



const LazySimpleCard = React.lazy(() => import('./LazyIframes'));

export default LazySimpleCard;