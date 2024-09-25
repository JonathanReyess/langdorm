// Importing AppConfig from the '../utils/AppConfig' file
import { AppConfig } from '../utils/AppConfig';

// Defining the FooterCopyright component
const FooterCopyright = () => (
  // Rendering a div element with the class "footer-copyright"
  <div className="footer-copyright">
    {/* Rendering copyright text with the current year and the title from AppConfig */}
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
    {/* Rendering a link to CreativeDesignsGuru */}
    <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
    {/* Styling for the footer link */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

// Exporting the FooterCopyright component for use in other parts of the application
export { FooterCopyright };
