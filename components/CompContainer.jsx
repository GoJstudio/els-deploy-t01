import Hero from '@/components/heros/Hero';
import Features from '@/components/features/Features';
import FeaturesHor from '@/components/features/FeaturesHor';
import Faqs from './faqs/Faqs';

// {children}
import TextCard from '@/components/cards/TextCard';
import HorizCardTxtimg from '@/components/cards/HorizCardTxtimg';
import HorizCardImgtxt from '@/components/cards/HorizCardImgtxt';

const CompContainer = () => {
  return (
    <div>
      <Hero />
      <Features>
        <TextCard />
        <TextCard />
        <TextCard />
        <TextCard />
      </Features>
      <FeaturesHor>
        <HorizCardTxtimg />
        <HorizCardImgtxt />
      </FeaturesHor>
      <Faqs />
  </div>
  )
}

export default CompContainer
