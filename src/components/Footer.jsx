import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: faLinkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: faGithub
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: faTwitter
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
