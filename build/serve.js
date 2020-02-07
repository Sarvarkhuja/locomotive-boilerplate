// for server config 
// function serve(done) {
//     server.init({
//         notify: false,
//         proxy: paths.url,
//         host: paths.url,
//         open: 'external'
//     });
//     done();
// }

import browserSync from 'browser-sync';
import paths from '../mconfig.json';

export const server = browserSync.create();

function serve(done) {
    server.init({
        notify: false,
        server: {
            baseDir: paths.dest
        }
    });
    done();
}

export default serve;