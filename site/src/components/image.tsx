import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ImageQuery>(graphql`
    query Image {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (data.placeholderImage?.childImageSharp?.fluid == null) {
    throw new Error('gatsby-astronaut.png file is not found');
  }

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  );
};

export default Image;
