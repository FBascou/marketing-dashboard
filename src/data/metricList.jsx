import { allDataObject } from './transformedData'

export const metricList = [
  {
    id: 0,
    metric: 'budgetTotal',
    name: 'Total Budget',
    data: allDataObject.overview,
    description: '',
    formula: '',
  },
  {
    id: 1,
    metric: 'expenseTotal',
    name: 'Total Expense',
    data: allDataObject.overview,
    description: '',
    formula: '',
  },
  {
    id: 2,
    metric: 'impressions',
    name: 'Website Impressions',
    data: allDataObject.website,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 3,
    metric: 'visits',
    name: 'Website Visits',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 4,
    metric: 'sessions',
    name: 'Website Sessions',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 5,
    metric: 'avgSessionDuration',
    name: 'Website Session Duration',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 6,
    metric: 'uniquePageVisit',
    name: 'Website Unique Page Visit',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 7,
    metric: 'bounceRate',
    name: 'Website Bounce Rate',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 8,
    metric: 'avgSessionDuration',
    name: 'Website Session Duration',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 9,
    metric: 'clicks',
    name: 'Website Clicks',
    data: allDataObject.website,
    description: '',
    formula: '',
  },
  {
    id: 10,
    metric: 'ctr',
    name: 'Website CTR (%)',
    data: allDataObject.website,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 11,
    metric: 'er',
    name: 'Website ER (%)',
    data: allDataObject.website,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '',
  },
  {
    id: 12,
    metric: 'display',
    name: 'Traffic Source Display',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 13,
    metric: 'organic',
    name: 'Traffic Source Organic',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 14,
    metric: 'paid',
    name: 'Traffic Source Paid',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 15,
    metric: 'referral',
    name: 'Traffic Source Referral',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 16,
    metric: 'social',
    name: 'Traffic Source Social',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 17,
    metric: 'deffect',
    name: 'Traffic Source Deffect',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 18,
    metric: 'email',
    name: 'Traffic Source Email',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 19,
    metric: 'direct',
    name: 'Traffic Source Direct',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 20,
    metric: 'other',
    name: 'Traffic Source Other',
    data: allDataObject.traffic,
    description: '',
    formula: '',
  },
  {
    id: 21,
    metric: 'conversions',
    name: 'Website Conversions',
    data: allDataObject.conversions,
    description: '',
    formula: '',
  },
  {
    id: 22,
    metric: 'costPerConversion',
    name: 'Website Cost-per-Conversion',
    data: allDataObject.conversions,
    description: '',
    formula: '',
  },
  {
    id: 23,
    metric: 'conversionRate',
    name: 'Website Conversion Rate (%)',
    data: allDataObject.conversions,
    description: '',
    formula: '',
  },
  {
    id: 24,
    metric: 'leads',
    name: 'Website Leads',
    data: allDataObject.leads,
    description: '',
    formula: '',
  },
  {
    id: 25,
    metric: 'costPerLead',
    name: 'Website Cost-per-Lead',
    data: allDataObject.leads,
    description: '',
    formula: '',
  },
  {
    id: 26,
    metric: 'leadRate',
    name: 'Website Lead Rate (%)',
    data: allDataObject.leads,
    description: '',
    formula: '',
  },
  {
    id: 27,
    metric: 'followers',
    name: 'Facebook Followers',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 28,
    metric: 'pageViews',
    name: 'Facebook Page Views',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 29,
    metric: 'impressions',
    name: 'Facebook Impressions',
    data: allDataObject.facebook,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 30,
    metric: 'adFrequency',
    name: 'Facebook Ad Frequency',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 31,
    metric: 'reach',
    name: 'Facebook Reach',
    data: allDataObject.facebook,
    description: 'Number of people that were exposed to your message during a post/ad',
    formula: '',
  },
  {
    id: 32,
    metric: 'age',
    name: 'Facebook Age Group',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 33,
    metric: 'percentageMale',
    name: 'Facebook Male (%)',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 34,
    metric: 'percentageFemale',
    name: 'Facebook Female (%)',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 35,
    metric: 'country1',
    name: 'Facebook Country 1',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 36,
    metric: 'country2',
    name: 'Facebook Country 2',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 37,
    metric: 'country3',
    name: 'Facebook Country 3',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 38,
    metric: 'mobile',
    name: 'Facebook Mobile (%)',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 39,
    metric: 'computer',
    name: 'Facebook Computer (%)',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 40,
    metric: 'ctr',
    name: 'Facebook CTR (%)',
    data: allDataObject.facebook,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 41,
    metric: 'er',
    name: 'Facebook ER (%)',
    data: allDataObject.facebook,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '((Link Clicks + Reactions + Likes + Shares + Comments + …) / Impressions) * 100',
  },
  {
    id: 42,
    metric: 'clicks',
    name: 'Facebook Clicks',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 43,
    metric: 'reactions',
    name: 'Facebook Reactions',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 44,
    metric: 'shares',
    name: 'Facebook Shares',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 45,
    metric: 'comments',
    name: 'Facebook Comments',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 46,
    metric: 'replies',
    name: 'Facebook Replies',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 47,
    metric: 'stickers',
    name: 'Facebook Stickers',
    data: allDataObject.facebook,
    description: '',
    formula: '',
  },
  {
    id: 48,
    metric: 'followers',
    name: 'Linkedin Followers',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 49,
    metric: 'pageViews',
    name: 'Linkedin Page Views',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 50,
    metric: 'impressions',
    name: 'Linkedin Impressions',
    data: allDataObject.linkedin,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 51,
    metric: 'adFrequency',
    name: 'Linkedin Ad Frequency',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 52,
    metric: 'reach',
    name: 'Linkedin Reach',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 53,
    metric: 'age',
    name: 'Linkedin Age Group',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 54,
    metric: 'percentageMale',
    name: 'Linkedin Male (%)',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 55,
    metric: 'percentageFemale',
    name: 'Linkedin Female (%)',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 56,
    metric: 'country1',
    name: 'Linkedin Country 1',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 57,
    metric: 'country2',
    name: 'Linkedin Country 2',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 58,
    metric: 'country3',
    name: 'Linkedin Country 3',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 59,
    metric: 'mobile',
    name: 'Linkedin Mobile (%)',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 60,
    metric: 'computer',
    name: 'Linkedin Computer (%)',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 61,
    metric: 'ctr',
    name: 'Linkedin CTR (%)',
    data: allDataObject.linkedin,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 62,
    metric: 'er',
    name: 'Linkedin ER (%)',
    data: allDataObject.linkedin,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '((Link Clicks + Reactions + Likes + Shares + Comments + …) / Impressions) * 100',
  },
  {
    id: 63,
    metric: 'clicks',
    name: 'Linkedin Clicks',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 64,
    metric: 'reactions',
    name: 'Linkedin Reactions',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 65,
    metric: 'shares',
    name: 'Linkedin Shares',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 66,
    metric: 'comments',
    name: 'Linkedin Comments',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 67,
    metric: 'replies',
    name: 'Linkedin Replies',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 68,
    metric: 'stickers',
    name: 'Linkedin Stickers',
    data: allDataObject.linkedin,
    description: '',
    formula: '',
  },
  {
    id: 69,
    metric: 'followers',
    name: 'Youtube Followers',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 70,
    metric: 'pageViews',
    name: 'Youtube Page Views',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 71,
    metric: 'impressions',
    name: 'Youtube Impressions',
    data: allDataObject.youtube,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 72,
    metric: 'adFrequency',
    name: 'Youtube Ad Frequency',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 73,
    metric: 'reach',
    name: 'Youtube Reach',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 74,
    metric: 'age',
    name: 'Youtube Age Group',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 75,
    metric: 'percentageMale',
    name: 'Youtube Male (%)',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 76,
    metric: 'percentageFemale',
    name: 'Youtube Female (%)',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 77,
    metric: 'country1',
    name: 'Youtube Country 1',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 78,
    metric: 'country2',
    name: 'Youtube Country 2',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 79,
    metric: 'country3',
    name: 'Youtube Country 3',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 80,
    metric: 'mobile',
    name: 'Youtube Mobile (%)',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 81,
    metric: 'computer',
    name: 'Youtube Computer (%)',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 82,
    metric: 'ctr',
    name: 'Youtube CTR (%)',
    data: allDataObject.youtube,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 83,
    metric: 'er',
    name: 'Youtube ER (%)',
    data: allDataObject.youtube,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '((Link Clicks + Reactions + Likes + Shares + Comments + …) / Impressions) * 100',
  },
  {
    id: 84,
    metric: 'clicks',
    name: 'Youtube Clicks',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 85,
    metric: 'reactions',
    name: 'Youtube Reactions',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 86,
    metric: 'shares',
    name: 'Youtube Shares',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 87,
    metric: 'comments',
    name: 'Youtube Comments',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 88,
    metric: 'replies',
    name: 'Youtube Replies',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 89,
    metric: 'stickers',
    name: 'Youtube Stickers',
    data: allDataObject.youtube,
    description: '',
    formula: '',
  },
  {
    id: 90,
    metric: 'followers',
    name: 'Twitter Followers',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 91,
    metric: 'pageViews',
    name: 'Twitter Page Views',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 92,
    metric: 'impressions',
    name: 'Twitter Impressions',
    data: allDataObject.twitter,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 93,
    metric: 'adFrequency',
    name: 'Twitter Ad Frequency',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 94,
    metric: 'reach',
    name: 'Twitter Reach',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 95,
    metric: 'age',
    name: 'Twitter Age Group',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 96,
    metric: 'percentageMale',
    name: 'Twitter Male (%)',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 97,
    metric: 'percentageFemale',
    name: 'Twitter Female (%)',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 98,
    metric: 'country1',
    name: 'Twitter Country 1',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 99,
    metric: 'country2',
    name: 'Twitter Country 2',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 100,
    metric: 'country3',
    name: 'Twitter Country 3',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 101,
    metric: 'mobile',
    name: 'Twitter Mobile (%)',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 102,
    metric: 'computer',
    name: 'Twitter Computer (%)',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 103,
    metric: 'ctr',
    name: 'Twitter CTR (%)',
    data: allDataObject.twitter,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 104,
    metric: 'er',
    name: 'Twitter ER (%)',
    data: allDataObject.twitter,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '((Link Clicks + Reactions + Likes + Shares + Comments + …) / Impressions) * 100',
  },
  {
    id: 105,
    metric: 'clicks',
    name: 'Twitter Clicks',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 106,
    metric: 'reactions',
    name: 'Twitter Reactions',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 107,
    metric: 'shares',
    name: 'Twitter Shares',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 108,
    metric: 'comments',
    name: 'Twitter Comments',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 109,
    metric: 'replies',
    name: 'Twitter Replies',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 110,
    metric: 'stickers',
    name: 'Twitter Stickers',
    data: allDataObject.twitter,
    description: '',
    formula: '',
  },
  {
    id: 111,
    metric: 'followers',
    name: 'Instagram Followers',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 112,
    metric: 'pageViews',
    name: 'Instagram Page Views',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 113,
    metric: 'impressions',
    name: 'Instagram Impressions',
    data: allDataObject.instagram,
    description: 'Number of times your posts/ads were on screen',
    formula: '',
  },
  {
    id: 114,
    metric: 'adFrequency',
    name: 'Instagram Ad Frequency',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 115,
    metric: 'reach',
    name: 'Instagram Reach',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 116,
    metric: 'age',
    name: 'Instagram Age Group',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 117,
    metric: 'percentageMale',
    name: 'Instagram Male (%)',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 118,
    metric: 'percentageFemale',
    name: 'Instagram Female (%)',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 119,
    metric: 'country1',
    name: 'Instagram Country 1',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 120,
    metric: 'country2',
    name: 'Instagram Country 2',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 121,
    metric: 'country3',
    name: 'Instagram Country 3',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 122,
    metric: 'mobile',
    name: 'Instagram Mobile (%)',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 123,
    metric: 'computer',
    name: 'Instagram Computer (%)',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 124,
    metric: 'ctr',
    name: 'Instagram CTR (%)',
    data: allDataObject.instagram,
    description: 'Percentage of how often someone clicked on your post/ad',
    formula: '(Total Link Clicks / Impressions) * 100',
  },
  {
    id: 125,
    metric: 'er',
    name: 'Instagram ER (%)',
    data: allDataObject.instagram,
    description: 'Percentage of the interaction with your posts/ads',
    formula: '((Link Clicks + Reactions + Likes + Shares + Comments + …) / Impressions) * 100',
  },
  {
    id: 126,
    metric: 'clicks',
    name: 'Instagram Clicks',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 127,
    metric: 'reactions',
    name: 'Instagram Reactions',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 128,
    metric: 'shares',
    name: 'Instagram Shares',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 129,
    metric: 'comments',
    name: 'Instagram Comments',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 130,
    metric: 'replies',
    name: 'Instagram Replies',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
  {
    id: 131,
    metric: 'stickers',
    name: 'Instagram Stickers',
    data: allDataObject.instagram,
    description: '',
    formula: '',
  },
]
