if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=r(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-747a3fdb"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0f1ac474-f7073c6f5869fe65b93c.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/297-1e5ef5bd565f054ab10c.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/695-144031251d29cbae5218.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/a9a7754c-afb96ae5b85be6507e38.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/cb1608f2-bd0c81627df3a5e8423c.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/commons-8d0057a4bb4ad83b2ef9.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/framework-319fded71ca607cad4b5.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/main-e621f36f022e8b94e3d8.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/404-566b357604d5775c2259.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/_app-fb53cfdd56e764c1c21c.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/_error-1091322eb18990835e1d.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/about-991ae84ece28dc4fae16.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/index-0ed8a3d21edd5f162cb3.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/pages/timings-3d3d02d1c6268b719504.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/chunks/webpack-d584cfdb4e5092e5bf27.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/css/1dcf05ef942c68018033.css",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/css/f06b16613e7cf520cac8.css",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/logo_horizontal-154a21d5848f255cb001f7b47fd66410.svg",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/logo_horizontal_urdu-88cf6d7c79ad621cfab25e233803f870.svg",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-1-16cf2d0bc87765af6ac0a69f7baca33b.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-2-c7ca2e0809ea2a7ffb6230327f38aa90.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-3-f073b5593e4606e01e3f733c6fe1589a.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-4-7a58dc9697f0342e9cb8cfeaab272797.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-5-a1aba487730651e76f692265f4c88c58.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/images/pdf-6-f015f0eaf23de0fb566712cff5d18174.png",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/sNElbG_HuyoW8y6mOtCrm/_buildManifest.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/_next/static/sNElbG_HuyoW8y6mOtCrm/_ssgManifest.js",revision:"sNElbG_HuyoW8y6mOtCrm"},{url:"/calendars/Fiqah Hanafiya--1.ics",revision:"9a444c07e35de30536e545d31ff2a3e6"},{url:"/calendars/Fiqah Hanafiya--11.ics",revision:"7467515cbc9c582a07b4957823885ee4"},{url:"/calendars/Fiqah Hanafiya--2.ics",revision:"0804100e660bc5b6f92059254285ac3d"},{url:"/calendars/Fiqah Hanafiya--3.ics",revision:"696c7dfff11b131edccc88243a59fa4c"},{url:"/calendars/Fiqah Hanafiya-0.ics",revision:"7d02f0958a71b38ecf32015e609ff8bc"},{url:"/calendars/Fiqah Hanafiya-1.ics",revision:"e1a7e456070c0c0403f3cc5fe6a7b704"},{url:"/calendars/Fiqah Hanafiya-2.ics",revision:"920725b84416797b2a4272991821b9d0"},{url:"/calendars/Fiqah Hanafiya-3.ics",revision:"3ec914ed45aaaa625e9afcea3e45c4d3"},{url:"/calendars/Fiqah Hanafiya-4.ics",revision:"770bef5f0dc3e98b2b77abeaa7064bb9"},{url:"/calendars/Fiqah Jaffaria--1.ics",revision:"ea6eae38a82c6613ca8f77253a185302"},{url:"/calendars/Fiqah Jaffaria--11.ics",revision:"c1df30e2de0c13371a00151e65cc3b76"},{url:"/calendars/Fiqah Jaffaria--2.ics",revision:"fc2bdaf3adbe0c8b342f748ed92bb5b6"},{url:"/calendars/Fiqah Jaffaria--3.ics",revision:"a93e5bf242c8e2e5324d676fe83605d0"},{url:"/calendars/Fiqah Jaffaria-0.ics",revision:"fcd26cfec5eba8a523ef84c1b351529b"},{url:"/calendars/Fiqah Jaffaria-1.ics",revision:"ac019688fb24507bc44ad6664aa2c364"},{url:"/calendars/Fiqah Jaffaria-2.ics",revision:"68d316dadefd6ad4f61820bedb6ed60c"},{url:"/calendars/Fiqah Jaffaria-3.ics",revision:"2737a123bfa73d72672b7b07b6642728"},{url:"/calendars/Fiqah Jaffaria-4.ics",revision:"a3d36d5e5eede9f54ba9a85d78d72932"},{url:"/calendars/Jammu--1.ics",revision:"e6463555a8c712ca0bb0e0f63c9be3d3"},{url:"/calendars/Jammu--2.ics",revision:"1af2028aedb8a93d13cf04759754ddc3"},{url:"/calendars/Jammu--3.ics",revision:"914e26c1e7bb6dadf9b572c986bd3f94"},{url:"/calendars/Jammu-0.ics",revision:"d88b616ec3c89a65bc01db47dcdc5337"},{url:"/calendars/Jammu-1.ics",revision:"4981eca681dc9eeef152e5db0b159229"},{url:"/calendars/Jammu-3.ics",revision:"f4d76d08aa3b8f0759f077f4ee99aef7"},{url:"/calendars/Jammu-4.ics",revision:"f259cf9dcee0a869052a7ff69d6f8d02"},{url:"/calendars/Kargil-0.ics",revision:"d2b836473bfde3c94593c67abc26914f"},{url:"/calendars/Kishtwar-0.ics",revision:"103eaca9a34666e49e1ea6e15ba56102"},{url:"/calendars/Kupwara-0.ics",revision:"785b3960cbd87794642f3bd3fe4c7ceb"},{url:"/favicons/android-chrome-192x192.png",revision:"bc1a354ab3e3f7e05263cbf3303858c9"},{url:"/favicons/android-chrome-512x512.png",revision:"6ba93a05dfecba9d56f0472d8499564b"},{url:"/favicons/apple-touch-icon.png",revision:"01c6507a334fa685cfba54b68674d869"},{url:"/favicons/browserconfig.xml",revision:"e2243233b8f83f621e8217c45d913455"},{url:"/favicons/favicon-16x16.png",revision:"9638afa0bda48e3baa354d065d5de170"},{url:"/favicons/favicon-32x32.png",revision:"94fa4bcdb99b3122cc3c813af72b4ca1"},{url:"/favicons/favicon.ico",revision:"9fb314bfa824589d23accca32b522729"},{url:"/favicons/mstile-144x144.png",revision:"4256332f0dc9986a37b5e4d0d501c314"},{url:"/favicons/mstile-150x150.png",revision:"6fdac71a27176b1631cac097595b22f5"},{url:"/favicons/mstile-310x150.png",revision:"41522026b2aea6572aba4508a6c7a344"},{url:"/favicons/mstile-310x310.png",revision:"80a1f342d584f7c4455d3e092f03312a"},{url:"/favicons/mstile-70x70.png",revision:"a6b94b233408a893ab29196735209f5d"},{url:"/favicons/safari-pinned-tab.svg",revision:"01f01e8b72515de9c375f6101d3c0428"},{url:"/fonts/Narqalam.woff2",revision:"e3a83f2612a4328f233696b355a0230b"},{url:"/icon.svg",revision:"5d59b7ed58256f5568f2f143f776e793"},{url:"/images/pdf-1.png",revision:"e2552516c31d8560471647e638715c3b"},{url:"/images/pdf-2.png",revision:"94783162435515a8f84d98f03b28838c"},{url:"/images/pdf-3.png",revision:"e8b5d0cbb9d4bd837cfac81b98f0ab73"},{url:"/images/pdf-4.png",revision:"13fef4d6de62035d03b8769ddb617417"},{url:"/images/pdf-5.png",revision:"494d7faa7f9203538ff06fc026752340"},{url:"/images/pdf-6.png",revision:"86ee6e66fe0230d05b73f512621cf838"},{url:"/logo_horizontal.svg",revision:"f25c1233a5d49b0b078567f247fed39e"},{url:"/logo_horizontal_urdu.svg",revision:"97d8b5e9cf6e52bcd9f8812727114ea9"},{url:"/manifest.json",revision:"88826e0add8991d360e2a3c4a862252f"},{url:"/og_image.png",revision:"1c09571576b201358b310a3157e84b8b"},{url:"/screenshots/screenshot1.png",revision:"dd40a866f19e1fd8defeefcba5eda38b"},{url:"/screenshots/screenshot2.png",revision:"f5b53b91ddabc4dd34ca5e85183645b6"},{url:"/screenshots/screenshot3.png",revision:"de6cacf0aa2eed02d21c34c33ccb49a6"},{url:"/screenshots/screenshot4.png",revision:"4d7b807d6913dea4bf79f3a86b34a987"},{url:"/screenshots/screenshot6.png",revision:"3f702aa60d04903e797fa5414bf57240"},{url:"/screenshots/screenshot7.png",revision:"ea9080723c700e1eeb422573f514aca4"},{url:"/screenshots/screenshot8.png",revision:"86f9de9aeccb24919a166bace6419b0e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute("/",new e.StaleWhileRevalidate({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:100,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.CacheFirst({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:1314e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:1314e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:1314e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:1314e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/*/,new e.StaleWhileRevalidate({cacheName:"extra",plugins:[new e.ExpirationPlugin({maxEntries:100,purgeOnQuotaError:!0})]}),"GET")}));
