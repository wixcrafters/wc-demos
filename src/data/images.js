// Real image from client CDN (static.wixstatic.com) — every URL below was taken from wixcrafters.com

const W = 'https://static.wixstatic.com/media/'

// Real image from client CDN
export const IMG = {
  // Services
  serviceApi: `${W}bda2ac_66a0a3a2446d4ed6bae39c593a785402~mv2.png/v1/fill/w_980,h_653,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Apr%2030%2C%202026%2C%2007_39_33%20AM.png`,
  serviceVelo: `${W}bda2ac_d1a200d508e24211af14fa15cdb3fc3a~mv2.png/v1/fill/w_980,h_653,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Apr%2030%2C%202026%2C%2007_35_47%20AM.png`,
  servicePortal: `${W}bda2ac_369531524a084194886f7f0e43e429d8~mv2.png/v1/crop/x_0,y_0,w_1536,h_930/fill/w_980,h_593,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ChatGPT%20Image%20Apr%2030%2C%202026%2C%2007_36_57%20AM.png`,
  // Feature sections
  veloExpert: `${W}bda2ac_d7f101e93e71498683ffa3258e079813~mv2.png/v1/fill/w_980,h_784,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Velo%20Expert.png`,
  integrations: `${W}bda2ac_b685e684c2b24ab091db480617030abd~mv2.png/v1/crop/x_26,y_211,w_1485,h_639/fill/w_980,h_422,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Integrations.png`,
  codePanel: `${W}5d8dbe_0a655742c3d14e22a8f174b4b0438304~mv2.png/v1/fill/w_600,h_500,al_c,q_85,enc_avif,quality_auto/code_panel_image.png`,
  // Portfolio
  lionshare: `${W}bda2ac_283386cb0afd42c384e9a32b37fe3c8c~mv2.png/v1/fill/w_980,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pink%20Poppy%20Flowers.png`,
  petalDoe: `${W}bda2ac_08d73fd495054e6e9152bb1aa7f1a068~mv2.png/v1/fill/w_980,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20-%202026-06-14T112907_780.png`,
  asc: `${W}bda2ac_07b548560e374ffc88f72800569eb158~mv2.png/v1/fill/w_980,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20-%202026-06-14T113032_318.png`,
  sunni: `${W}bda2ac_dc0822767d5b4c1fafb821bbafe6fb57~mv2.png/v1/fill/w_980,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%20-%202026-06-14T113307_730.png`,
  // Client marks and avatars
  parkeLogo: `${W}bda2ac_19198a43697a4be39341c0feaaf9ac8c~mv2.png/v1/fill/w_286,h_82,al_c,q_85,enc_avif,quality_auto/image%20(100).png`,
  lionshareLogo: `${W}fc79a8_530f73d4dccd4b00974ad302a118823a~mv2.png/v1/crop/x_729,y_163,w_2271,h_517/fill/w_702,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LIONSHARE%20COWORK%20LOGO%20WHITE.png`,
  modAvatar: `${W}bda2ac_d773667e79da47d0956379bf991378e0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,enc_avif,quality_auto/image%20-%202026-05-04T092853_538.png`,
  flynnAvatar: `${W}bda2ac_4a827825f8d9467ba7c91b5634b49fcb~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/image%20-%202026-05-04T092754_785.png`,
  mikeAvatar: `${W}a94817_01529a37400b4475b5a17bf07e8d2a9d~mv2.jpeg/v1/fill/w_894,h_886,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MikeJanuzzi.jpeg`,
}

const cover = (id, ext = 'jpg') =>
  `${W}${id}~mv2.${ext}/v1/fill/w_720,h_540,fp_0.50_0.50,q_85,enc_avif,quality_auto/${id}~mv2.webp`

// Real image from client CDN (blog covers, re-requested at a higher quality than the site's blurred thumbnails)
export const BLOG_COVERS = {
  beforeAfter: cover('5d8dbe_b84bb079a2a742058e6d50f2bdae8ebd'),
  emailAutomation: cover('5d8dbe_8df603f011b442eab05dd2f124795565'),
  booking: cover('5d8dbe_f4db860cb57a4bebb08cb9612f01b1a5'),
  repeaterFilters: cover('5d8dbe_04048e6fbda24d31a252af4560ae765d'),
  dashboard: cover('5d8dbe_c361128dfe0347e0951019ba9ebe93d4'),
  payment: cover('5d8dbe_8da9eadc580d4b25ba3dbaa4f6dbc990'),
  estimator: cover('5d8dbe_84d0d8dc995b423396e5fa76051eca73'),
  qr: cover('5d8dbe_1597c013bacc488b8c6fdaabfa4ae26e'),
  chatbot: cover('5d8dbe_4d0af575c86649ab952d11908a5d6b6d', 'png'),
  distance: cover('5d8dbe_2658ec94eadb4b64b8e0ed3d2d6b055e', 'png'),
  dynamicFilters: cover('5d8dbe_9cf62163df154b1bbfcdef7dca424da3', 'png'),
  base64: cover('bda2ac_f6b80ac40b4041a38f39baacde013485'),
  imageToUrl: cover('bda2ac_86f59ce8b2cd41b1ac59e6efec034d0e'),
  qrCode: cover('bda2ac_2674e029022f45959c3fbd062e7a7479', 'png'),
}
