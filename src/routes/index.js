// Layouts
import { HeaderOnly } from '~/components/Layout';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoute = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/search', element: Search, layout: null },
];
const privateRoute = [];

export { publicRoute, privateRoute };
