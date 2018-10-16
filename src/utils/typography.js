import Typography from 'typography';
import gray from 'gray-percentage';

const YU_GOTHIC = ['游ゴシック', 'Yu Gothic', '游ゴシック体', 'YuGothic', 'sans-serif'];

const typography = new Typography({
  title: 'MakeNowJust',
  baseFontSize: '14px',
  baseLineHeight: 1.55,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Nova Mono',
      styles: ['400'],
    },
    {
      name: 'Nova Square',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Nova Square', ...YU_GOTHIC],
  headerGray: 20,
  headerWeight: 'bold',
  bodyFontFamily: ['Raleway', ...YU_GOTHIC],
  bodyGray: 10,
  bodyWeight: 'normal',
  overrideStyles: ({rhythm}) => ({
    'header h1': {
      fontFamily: ['Nova Mono', ...YU_GOTHIC].join(', '),
    },
    blockquote: {
      paddingLeft: rhythm(1 / 2),
      borderLeft: `${rhythm(3 / 14)} solid ${gray(40)}`,
    },
    code: {
      padding: `2px ${rhythm(4 / 14)}`,
      color: '#f73434',
      background: gray(90),
      fontFamily: ['Nova Mono', 'Monaco', 'monospace'].join(', '),
    },
  }),
});

export default typography;
