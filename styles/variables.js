import styled from 'styled-components';

const size = {
    MobileLandscape: '480px',
    TabletPortrait: '768px',
    TabletLandscape: '992px',
    Laptops: '1200px',
}

export const device = {
    MobileLandscape: `(min-width: ${size.MobileLandscape})`,
    TabletPortrait: `(min-width: ${size.TabletPortrait})`,
    TabletLandscape: `(min-width: ${size.TabletLandscape})`,
    Laptops: `(min-width: ${size.Laptops})`,
}

