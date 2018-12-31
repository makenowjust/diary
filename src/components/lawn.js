import {StaticQuery, graphql, navigate} from 'gatsby';
import React from 'react';

import styles from './lawn.module.scss';

const WEEK_DAYS = 7;
const WEEK_OFFSET = 1;
const WEEKS = 53;
const DAY_MS = 24 * 3600 * 1000;
const WEEK_MS = 7 * DAY_MS;
const WEEKS_MS = WEEKS * WEEK_MS;

const MARGIN = 2;
const GRASS_SIZE = 12;
const WIDTH = MARGIN + (GRASS_SIZE + MARGIN) * 54;
const HEIGHT = MARGIN + (GRASS_SIZE + MARGIN) * (7 + 1);

const INACTIVE = '#ebedf0';
const ACTIVE = ['#c6e48b', '#7bc96f', '#239a3b', '#196127'];

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Lawn = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: {fields: [fields___slug], order: DESC}) {
          edges {
            node {
              id
              fields {
                slug
                date
                textSize
              }
            }
          }
        }
      }
    `}
    render={data => {
      const lawnData = [];
      const latest = new Date();
      const start = new Date(latest - WEEKS_MS);
      let x = MARGIN;
      for (let i = 0; i < WEEKS * WEEK_DAYS; i++) {
        const date = new Date(start.getTime() + DAY_MS * i);
        const day = (date.getDay() + WEEK_OFFSET) % WEEK_DAYS;
        const y = MARGIN + (GRASS_SIZE + MARGIN) * (day + 1);
        lawnData.push({x, y, slug: null, size: 0, date});
        if (day === 6) {
          x += GRASS_SIZE + MARGIN;
        }
      }

      for (const {node} of data.allMarkdownRemark.edges) {
        const date = new Date(node.fields.date);
        const i = Math.floor((date - start) / DAY_MS);
        if (i < 0) {
          break;
        }
        lawnData[i].slug = node.fields.slug;
        lawnData[i].size += node.fields.textSize;
      }

      const months = [];
      let lastMonth = lawnData[0].date.getMonth();

      const grasses = lawnData.map(grass => {
        const props = {
          fill: INACTIVE,
        };
        if (grass.slug) {
          const activeness = Math.min(Math.max(7, Math.floor(Math.log2(grass.size))), 10) - 7;
          props.fill = ACTIVE[activeness];
          props.className = styles.grass;
          props.onClick = () => navigate(grass.slug);
        }

        const month = grass.date.getMonth();
        if (month !== lastMonth) {
          months.push(
            <text key={grass.date} className={styles.text} x={grass.x} y={MARGIN + GRASS_SIZE}>
              {MONTH_NAMES[month]}
            </text>,
          );
          lastMonth = month;
        }

        return (
          <rect
            key={grass.date.toISOString()}
            height={GRASS_SIZE}
            width={GRASS_SIZE}
            x={grass.x}
            y={grass.y}
            {...props}
          >
            {grass.slug && <title>{grass.slug}</title>}
          </rect>
        );
      });

      return (
        <div className={styles.container}>
          <svg width={`${WIDTH}px`} height={`${HEIGHT}px`}>
            {months}
            {grasses}
          </svg>
        </div>
      );
    }}
  />
);

export default Lawn;
