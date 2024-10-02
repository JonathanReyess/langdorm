// MemberHero.tsx
import { Section } from '../layout/Section';

interface MemberHeroProps {
  title: string;
  imageSrc: string;
}

const MemberHero: React.FC<MemberHeroProps> = ({ title, imageSrc }) => (
  <>
    <Section yPadding="pt-0 pb-20">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-96 w-custom-1200">
          <img
            src={imageSrc}
            alt={`${title} Logo`} // Alternative text for accessibility
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>
    </Section>
  </>
);

export { MemberHero };
