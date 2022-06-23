import {
  getMonthlySum,
  getMonthlyData,
  setGrowthRate,
  setCostPerMetric,
  sumValue,
  getTotalAvg,
} from '../helpers/helpers';

import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai';

import { overviewData } from './overviewData';
import { websiteData } from './websiteData';
import { leadsData } from './leadsData';
import { conversionsData } from './conversionsData';
import { facebookData } from './facebookData';
import { linkedinData } from './linkedinData';
import { youtubeData } from './youtubeData';
import { twitterData } from './twitterData';
import { instagramData } from './instagramData';
import { websiteTrafficData } from './websiteTrafficData';

// All Data Array
export const allData = [
  overviewData,
  websiteData,
  leadsData,
  conversionsData,
  linkedinData,
  youtubeData,
  facebookData,
  twitterData,
  instagramData,
  websiteTrafficData,
];

// Leads
export const leadsChartData = getMonthlySum(leadsData, 2022, 'leads');
export const leadsMonthlyData = getMonthlyData(leadsChartData);
export const leadsGrowthRateData = setGrowthRate(leadsChartData);
export const leadsCostChartData = getMonthlySum(leadsData, 2022, 'costPerLead');
export const [leadsCostLastMonthData] = leadsCostChartData.slice(-1);
export const leadsCostGrowthRateData = setGrowthRate(leadsCostChartData);
export const costPerLeadsMetric = setCostPerMetric(
  overviewData,
  'expenseTotal',
  leadsData,
  'leads'
);
export const leadsAllData = {
  id: 1,
  name: 'Leads',
  monthlySumArray: leadsChartData,
  monthlySumObject: leadsMonthlyData,
  growthRate: leadsGrowthRateData,
  costPer: costPerLeadsMetric,
  costPerMonthlySumArray: leadsCostChartData,
  costPerLastMonth: leadsCostLastMonthData,
  costPerGrowthRate: leadsCostGrowthRateData,
};

// Conversions
export const conversionsChartData = getMonthlySum(
  conversionsData,
  2022,
  'conversions'
);
export const conversionsMonthlyData = getMonthlyData(conversionsChartData);
export const conversionsGrowthRateData = setGrowthRate(conversionsChartData);
export const conversionsCostChartData = getMonthlySum(
  conversionsData,
  2022,
  'costPerConversion'
);
export const [conversionsCostLastMonthData] =
  conversionsCostChartData.slice(-1);
export const conversionsCostGrowthRateData = setGrowthRate(
  conversionsCostChartData
);
export const costPerConversionsMetric = setCostPerMetric(
  overviewData,
  'expenseTotal',
  conversionsData,
  'conversions'
);

export const conversionsAllData = {
  id: 2,
  name: 'Conversions',
  monthlySumArray: conversionsChartData,
  monthlySumObject: conversionsMonthlyData,
  growthRate: conversionsGrowthRateData,
  costPer: costPerConversionsMetric,
  costPerMonthlySumArray: conversionsCostChartData,
  costPerLastMonth: conversionsCostLastMonthData,
  costPerGrowthRate: conversionsCostGrowthRateData,
};

// Facebook
export const facebookTotalFollowersData = sumValue(
  facebookData,
  'followers'
).toLocaleString('en');
export const facebookTotalPageViewsData = sumValue(
  facebookData,
  'pageViews'
).toLocaleString('en');
export const facebookAvgCtrData = getTotalAvg(facebookData, 'ctr');
export const facebookAvgErData = getTotalAvg(facebookData, 'er');
export const facebookAllData = {
  id: 1,
  name: 'Facebook',
  icon: <AiOutlineFacebook />,
  followers: facebookTotalFollowersData,
  pageViews: facebookTotalPageViewsData,
  ctr: facebookAvgCtrData,
  er: facebookAvgErData,
};

// Linkedin
export const linkedinTotalFollowersData = sumValue(
  linkedinData,
  'followers'
).toLocaleString('en');
export const linkedinTotalPageViewsData = sumValue(
  linkedinData,
  'pageViews'
).toLocaleString('en');
export const linkedinAvgCtrData = getTotalAvg(linkedinData, 'ctr');
export const linkedinAvgErData = getTotalAvg(linkedinData, 'er');
export const linkedinAllData = {
  id: 2,
  name: 'LinkedIn',
  icon: <AiOutlineLinkedin />,
  followers: linkedinTotalFollowersData,
  pageViews: linkedinTotalPageViewsData,
  ctr: linkedinAvgCtrData,
  er: linkedinAvgErData,
};

// Youtube
export const youtubeTotalFollowersData = sumValue(
  youtubeData,
  'followers'
).toLocaleString('en');
export const youtubeTotalPageViewsData = sumValue(
  youtubeData,
  'pageViews'
).toLocaleString('en');
export const youtubeAvgCtrData = getTotalAvg(youtubeData, 'ctr');
export const youtubeAvgErData = getTotalAvg(youtubeData, 'er');
export const youtubeAllData = {
  id: 3,
  name: 'Youtube',
  icon: <AiOutlineYoutube />,
  followers: youtubeTotalFollowersData,
  pageViews: youtubeTotalPageViewsData,
  ctr: youtubeAvgCtrData,
  er: youtubeAvgErData,
};

// Twitter
export const twitterTotalFollowersData = sumValue(
  twitterData,
  'followers'
).toLocaleString('en');
export const twitterTotalPageViewsData = sumValue(
  twitterData,
  'pageViews'
).toLocaleString('en');
export const twitterAvgCtrData = getTotalAvg(twitterData, 'ctr');
export const twitterAvgErData = getTotalAvg(twitterData, 'er');
export const twitterAllData = {
  id: 4,
  name: 'Twitter',
  icon: <AiFillTwitterSquare />,
  followers: twitterTotalFollowersData,
  pageViews: twitterTotalPageViewsData,
  ctr: twitterAvgCtrData,
  er: twitterAvgErData,
};

// Instagram
export const instagramTotalFollowersData = sumValue(
  instagramData,
  'followers'
).toLocaleString('en');
export const instagramTotalPageViewsData = sumValue(
  instagramData,
  'pageViews'
).toLocaleString('en');
export const instagramAvgCtrData = getTotalAvg(instagramData, 'ctr');
export const instagramAvgErData = getTotalAvg(instagramData, 'er');
export const instagramAllData = {
  id: 5,
  name: 'Instagram',
  icon: <AiOutlineInstagram />,
  followers: instagramTotalFollowersData,
  pageViews: instagramTotalPageViewsData,
  ctr: instagramAvgCtrData,
  er: instagramAvgErData,
};

// Social Media Data
export const allSocialMediaData = [
  facebookAllData,
  linkedinAllData,
  youtubeAllData,
  twitterAllData,
  instagramAllData,
];
