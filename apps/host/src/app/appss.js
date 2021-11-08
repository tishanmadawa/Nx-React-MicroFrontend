import Mount from "marketing/MarketingApp";
// import { Mount } from "@nrwl/"
// const mount = import("marketing")
import React, { lazy } from "react";
import * as ReactDOM from 'react-dom';

// const Mount = lazy(() => import("marketing/MarketingApp"))
// const mount = React.lazy(() => import("marketing/MarketingApp"));

// console.log("mount1", Mount);

export const App1 = () => (
    <div>
        <React.Suspense fallback="Loading...">
            {/* <Mount /> */}
        </React.Suspense>
    </div>
)

