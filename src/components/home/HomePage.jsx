import React, { lazy, Suspense } from 'react';
import Loader from '../../helpers/common/Loader';
import AboutSection from './sections/AboutSection';

const FollowSection = lazy(() => import('./sections/FollowSection'));
const BenefitsSection = lazy(() => import('./sections/BenefitsSection'));
const WelcomeSection = lazy(() => import('./sections/WelcomeSection'));

const HomePage = () => (
  <Suspense fallback={<Loader />}>
    <WelcomeSection />
    <FollowSection />
    <BenefitsSection />
    <AboutSection />
  </Suspense>
);

export default HomePage;
