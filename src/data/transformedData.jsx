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
import { socialMediaUrl } from './socialMediaOverview';

// All Data Array
export const allDataArray = [
  overviewData,
  websiteData,
  websiteTrafficData,
  leadsData,
  conversionsData,
  linkedinData,
  youtubeData,
  facebookData,
  twitterData,
  instagramData,
];

// Overview
export const overviewAllData = [
  {
    id: 1,
    name: 'Total Budget',
    totalBudget: sumValue(overviewData, 'budgetTotal'),
  },
  {
    id: 2,
    name: 'Total Expense',
    totalExpense: sumValue(overviewData, 'expenseTotal'),
  },
];

// Website

export const websiteAllData = [
  {
    id: 1,
    name: 'Website Sessions',
    value: sumValue(websiteData, 'sessions').toLocaleString('en'),
  },
  {
    id: 2,
    name: 'Website Impressions',
    value: sumValue(websiteData, 'impressions').toLocaleString('en'),
  },
  { id: 3, name: 'Website Visits', value: sumValue(websiteData, 'visits').toLocaleString('en') },
  { id: 4, name: 'Website Clicks', value: sumValue(websiteData, 'clicks').toLocaleString('en') },
  {
    id: 5,
    name: 'Website CTR (%)',
    value: (sumValue(websiteData, 'clicks') / sumValue(websiteData, 'impressions')).toFixed(2),
  },
  { id: 6, name: 'Website ER (%)', value: sumValue(websiteData, 'er').toFixed(2) },
];

// Website Traffic
export const trafficDeffectChartData = getMonthlySum(websiteTrafficData, 2022, 'deffect');
export const [trafficDeffectLastMonthData] = trafficDeffectChartData.slice(-1);
export const trafficDirectChartData = getMonthlySum(websiteTrafficData, 2022, 'direct');
export const [trafficDirectLastMonthData] = trafficDirectChartData.slice(-1);
export const trafficDisplayChartData = getMonthlySum(websiteTrafficData, 2022, 'display');
export const [trafficDisplayLastMonthData] = trafficDisplayChartData.slice(-1);
export const trafficEmailChartData = getMonthlySum(websiteTrafficData, 2022, 'email');
export const [trafficEmailLastMonthData] = trafficEmailChartData.slice(-1);
export const trafficOrganicChartData = getMonthlySum(websiteTrafficData, 2022, 'organic');
export const [trafficOrganicLastMonthData] = trafficOrganicChartData.slice(-1);
export const trafficOtherChartData = getMonthlySum(websiteTrafficData, 2022, 'other');
export const [trafficOtherLastMonthData] = trafficOtherChartData.slice(-1);
export const trafficPaidChartData = getMonthlySum(websiteTrafficData, 2022, 'paid');
export const [trafficPaidLastMonthData] = trafficPaidChartData.slice(-1);
export const trafficReferralChartData = getMonthlySum(websiteTrafficData, 2022, 'referral');
export const [trafficReferralLastMonthData] = trafficReferralChartData.slice(-1);
export const trafficSocialChartData = getMonthlySum(websiteTrafficData, 2022, 'social');
export const [trafficSocialLastMonthData] = trafficSocialChartData.slice(-1);
export const websiteTrafficAllData = [
  {
    id: 1,
    name: 'Deffect',
    lastYear: trafficDeffectChartData,
    lastMonth: trafficDeffectLastMonthData,
  },
  {
    id: 2,
    name: 'Direct',
    lastYear: trafficDirectChartData,
    lastMonth: trafficDirectLastMonthData,
  },
  {
    id: 3,
    name: 'Display',
    lastYear: trafficDisplayChartData,
    lastMonth: trafficDisplayLastMonthData,
  },
  {
    id: 4,
    name: 'Email',
    lastYear: trafficEmailChartData,
    lastMonth: trafficEmailLastMonthData,
  },
  {
    id: 5,
    name: 'Organic',
    lastYear: trafficOrganicChartData,
    lastMonth: trafficOrganicLastMonthData,
  },
  {
    id: 6,
    name: 'Other',
    lastYear: trafficOtherChartData,
    lastMonth: trafficOtherLastMonthData,
  },
  {
    id: 7,
    name: 'Paid',
    lastYear: trafficPaidChartData,
    lastMonth: trafficPaidLastMonthData,
  },
  {
    id: 8,
    name: 'Referral',
    lastYear: trafficReferralChartData,
    lastMonth: trafficReferralLastMonthData,
  },
  {
    id: 9,
    name: 'Social',
    lastYear: trafficSocialChartData,
    lastMonth: trafficSocialLastMonthData,
  },
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
  'leads',
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
export const conversionsChartData = getMonthlySum(conversionsData, 2022, 'conversions');
export const conversionsMonthlyData = getMonthlyData(conversionsChartData);
export const conversionsGrowthRateData = setGrowthRate(conversionsChartData);
export const conversionsCostChartData = getMonthlySum(conversionsData, 2022, 'costPerConversion');
export const [conversionsCostLastMonthData] = conversionsCostChartData.slice(-1);
export const conversionsCostGrowthRateData = setGrowthRate(conversionsCostChartData);
export const costPerConversionsMetric = setCostPerMetric(
  overviewData,
  'expenseTotal',
  conversionsData,
  'conversions',
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
export const facebookTotalFollowersData = sumValue(facebookData, 'followers').toLocaleString('en');
export const facebookTotalPageViewsData = sumValue(facebookData, 'pageViews').toLocaleString('en');
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
  url: socialMediaUrl.facebook,
};

// Linkedin
export const linkedinTotalFollowersData = sumValue(linkedinData, 'followers').toLocaleString('en');
export const linkedinTotalPageViewsData = sumValue(linkedinData, 'pageViews').toLocaleString('en');
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
  url: socialMediaUrl.linkedin,
};

// Youtube
export const youtubeTotalFollowersData = sumValue(youtubeData, 'followers').toLocaleString('en');
export const youtubeTotalPageViewsData = sumValue(youtubeData, 'pageViews').toLocaleString('en');
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
  url: socialMediaUrl.youtube,
};

// Twitter
export const twitterTotalFollowersData = sumValue(twitterData, 'followers').toLocaleString('en');
export const twitterTotalPageViewsData = sumValue(twitterData, 'pageViews').toLocaleString('en');
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
  url: socialMediaUrl.twitter,
};

// Instagram
export const instagramTotalFollowersData = sumValue(instagramData, 'followers').toLocaleString(
  'en',
);
export const instagramTotalPageViewsData = sumValue(instagramData, 'pageViews').toLocaleString(
  'en',
);
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
  url: socialMediaUrl.instagram,
};

// Social Media Data
export const allSocialMediaData = [
  facebookAllData,
  linkedinAllData,
  youtubeAllData,
  twitterAllData,
  instagramAllData,
];

// All Data Object
export const allDataObject = {
  overview: overviewAllData,
  website: websiteAllData,
  traffic: websiteTrafficAllData,
  leads: leadsAllData,
  conversions: conversionsAllData,
  linkedin: linkedinAllData,
  youtube: youtubeAllData,
  facebook: facebookAllData,
  twitter: twitterAllData,
  instagram: instagramAllData,
};
