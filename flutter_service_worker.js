'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "815267c95a2b23d48afcea2c1251763a",
".git/config": "15941cf977552d5b8a4c0b0423b36c69",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c32db66e450cbefb4cf416e99306d8ae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d138b41314951a292621a95288c9191e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2073967c6a024490ae3187d26d863024",
".git/logs/refs/heads/main": "ef5c367bb3399ffdb40f1cab600c3927",
".git/logs/refs/remotes/origin/main": "a5ac83396cd317f7671ab72a7025e3d3",
".git/objects/02/142b28d97d181199a8beed210286a65b59f298": "722045d499761bbe4d82fb1d8ae16041",
".git/objects/02/7904c918351cc964615a53748f9e2946d4b23b": "6a41873a0be580b6f4bbfe42c8515cd7",
".git/objects/05/5b0a3e3a36b06c81e5ccb46805fe7781481b3b": "d513a63a593f8a2d3d9d9ab26189f048",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/6287d0a6ab6783d562d5e48565c417fb425890": "7471c22c024f7903a5788ca6f8920596",
".git/objects/0d/4940ad82079c78add52c056d76e693b6bea5e7": "f5123fcef1506815066749ce50292fd8",
".git/objects/0e/d4078644f6a4f1e321defb2bbd8e72cc9aa790": "f1c92980ca8bd4826f06310b6672755f",
".git/objects/10/4978c690f5b1e284110c7daf9b5267cb9aaddb": "dd1fc81664a66aff02ee52bf569eb370",
".git/objects/12/b24f430b29d7ce9c250ffb97d31b253ce68bc9": "88b22625d557d0f126dec5e314eacc61",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/61e62b041c8c20b185f9301974fa3b33b4bdd5": "752a3aca0b04c7ec22854a57f759c95c",
".git/objects/18/82fa27b2355b5e333828e9f5612220283df8b3": "0fa691502933855b48307137fef4df6d",
".git/objects/1a/ba3c83b11542de34500a7fb48c6ee11c17abce": "7c2ceea157b73cf00dff93c48c80a809",
".git/objects/1c/1ebbadca1478887ad75b75b335e66ed0626372": "46bccb775a33c30d1a14e951310a8006",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/5a1b333f133ff16c1e3483eeb00a1f3b86176b": "1988673caeac56c32b56b3e2be61aaf6",
".git/objects/25/c466dd5888cde89660e57d783d2879fcc19267": "222c6f12c0649aa1bdd03278860473e0",
".git/objects/26/dc7e3e7f3a1949389062601bdbdb5e5e27e56e": "5cbafbce6f0a20883a5f5af7b598321c",
".git/objects/29/03b57a3cba5849b39059445fa685755798bbf6": "538092f070a2c512381f2011b393a27d",
".git/objects/33/0557b2d077684341e25d183ba676ac783ff2c4": "2f0303a682f521c39a01d586ff89691a",
".git/objects/38/8b201d315f486d67361fa52c39aed4b3f0213a": "5baa6a6545a86f1b1bff86a3312a6cfc",
".git/objects/3f/bd3e5e354441856f84dd0f87808cd6352af092": "0927319c59ee712d2e2b6e840bb7d140",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/bb8a929612e83590582e0cd0286613c977acd1": "00959c2373b8dc944d7878c882a8b147",
".git/objects/52/8f3a7a04b0a66dcf011f084303e1bba8f86ae7": "58f8804384fe76813d7ffaa4b524b42a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/c6d4e6bdc1082119f47f2a0f587f0a6e3c7c39": "763b2e9946949517e623694c8daf7f23",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/538583fb32c129fd51c6e511d1c48ac6b52f64": "25c7c5885f2fce0ed72575ba9060ae10",
".git/objects/64/0daa6d36fa0ce4dc1bea3004eaf38170c8ce39": "b494496eae690eea39f1c69ab077dd2d",
".git/objects/6d/15e63aebba65312d09de63690d58d699b3d614": "d173184b066359a1562af356ca6cfae2",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/8cd07410d25ad0293e4b304661abb52f6c74c5": "b55ff99af34e09be58716bcb2fa3f4bf",
".git/objects/75/8e57c77b85768baecc67e81531865671ea67ed": "9de8de4e747db3166019523dbbc29f28",
".git/objects/76/c3b17e8293a94a91d8af53ca2e4bf689214aed": "c26be9b7d223729ad4c44350ba2fb021",
".git/objects/79/33a80a10dc82792937c34aca87344959cdf48f": "0b345726d70268bd6766f3c6c59d8479",
".git/objects/7a/0430137435934468238615240f270d9c42286a": "2f89c6081e665ec2b85fcc96bb652feb",
".git/objects/83/4dec5882ae52a2dc7296c798cbd7582bdbe20b": "438b7efe2d48444f3f068881260f39db",
".git/objects/83/af4efa5171d366cf1e5ce2edd2e28a55773656": "e283d6ae8d771f32e63557ddf11e77af",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/51d76d09875592ea4b87cddef4fe77418a7260": "a53ceffb4424755ffd063d20c47aec17",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/6784ac4e5cbd5742396d77bed75e0857ebb769": "f569ae41468f0a3710e4350d7d162ae0",
".git/objects/8f/d93fde3c1589605bb13bf822b4d347190a713b": "1b682567f9bd9e526b2eb9f8ce91b55c",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/92/eab3aee9bfb514f6b07745fea803794dfd719a": "ced7ca2d2cc491e584e889162581ff59",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/b79ef31d057ec4dc35dc5528c205cf9affdc23": "c4ecb9ba93a8f491b41b2885295ece27",
".git/objects/9e/05f61448d48d495eeefbc508a58d25d0fb9bd2": "5229f39305d9f123f0fd6cda4811570e",
".git/objects/9f/860ae34ec72e64b944f8eac4cd98e83073e22c": "b2f008e12ae68c1cfbcf8696b7ddb382",
".git/objects/9f/9f301bb3706af24865c7f0c6456977192bfcf3": "5981c5883c49ec4d2a869a645caecf33",
".git/objects/9f/de3af80e55756cb0072e5fe318682818047d27": "18d43aaabe86db8f5700ce98a504800c",
".git/objects/a0/3ae188345c189b40bfead2cdf2ebff59f374ce": "2f282ddf735857c5acc37a7a2e621039",
".git/objects/a1/1433d89f59eace5e6b026c640da41ee6781341": "134e4bff6d08e5afc2c9ca4fd2662cad",
".git/objects/a3/b96f662260acc91337d3c2d1c5bec92005d8e2": "d9c6e48f0a79c300892c49ab0e5cbeeb",
".git/objects/a7/186bacf82cf550e04c513e3467046be0b9099b": "322244de8b58793db894a7fd414f4538",
".git/objects/a8/920e22e705a47fd0f5c8649bf13bc8ae7997a4": "b1ae5f121f306a86426d39eed41ff13f",
".git/objects/ac/659db5890365e1ad6016161a67622221aaf136": "d1f517ffe5e82c9518fed271c166fc71",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/f938ad8c82e2a0a467329a861e9210f1a6b51c": "0cc3c60b9b17b585e941bf88a27f38e4",
".git/objects/b4/00cf1ed63edf52b7fb45a98c52932484c2c897": "3eb93343ba79f516b32b5d657b0a1d14",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/8132a66f644c7ab1662bcb9a8bc1131cfc89c2": "69d8bcc7a8699d1eb9840fa353732b70",
".git/objects/b6/f5028da8ccf2ce4f671b05b1a1630f365daf3b": "35c235c25c1e4ff54ce4648a971aac0a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/065ace55a077baf6272436e70e8f6244b400b6": "c06354677ea08e36032d261df3829c18",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/277673be42d195f58cd1ea7ef860a15189fe9f": "c3a3dfac7f3385b99eac9e73882cbda7",
".git/objects/bc/84008a4185089da3b4c7665de7e865b9a82808": "cc524bfac4a9f7d5a3de671cdceb656c",
".git/objects/bd/34a300e9b9f5a418ebb289dc6880b1568e3ab9": "f0f27570851cd10c018d2fa5e1e51de2",
".git/objects/bf/b2228a2bba225e19d5d6ed639b81b48ed8593c": "aebcd819bf3936d50a39f6643ae5a242",
".git/objects/c2/d16676064a3886e9556a76d0b83d5ddb3eae13": "853d415d48486865f742bb4d0d8018d5",
".git/objects/c5/8056a0a08f245f17c2bcaefc040c630dc6af09": "eb370d0579efec8899c9be78b2e9cc76",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/4b65b13a566a02b86d3d40c4b196528cb46d57": "706507c57877c629d7e602819ee56cdc",
".git/objects/c7/8f28ab7119b8cde5e9a741e13e6876d8c7ae17": "45b3809029986364150997da31e8e6ae",
".git/objects/c7/e17ac0bd6ee49605854c27ce778d428e841eb0": "f03d8244bce5bc8faaa2b796a8079e15",
".git/objects/ca/dd308dc40e798fcc956655dc18bbc6510970bd": "c221e07c7ddb6e5a9dd2ae6e95d60134",
".git/objects/cb/3cb7a337d9f4a9343e941e5f32a693e47b75af": "11b95d3bced34559392f50e7a98f2341",
".git/objects/d0/0ce47b31d7b883c99a013d022c85220b0a6ae2": "137680a65814ac2872c4f3ec957c6c03",
".git/objects/d2/026478129e83163793b2d4d3eb259826f75cfe": "f82a70e13913ffb281cc1bfd4a1c6220",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/38d8b5a375d0ca6d2d2b9b08e57bd242641beb": "2edcdd50953b50b46bf59694d30a1c27",
".git/objects/da/d1fca9b102bd546698ba86c4006493a769f5d0": "25a04cdd8275937f72809cfe71fbd021",
".git/objects/db/0614f050d5da8581dd9c90a7c40c22c760aeb0": "1a535a89efcc1f9818fdea3b42dcda7b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/8b34e27d698028f21e879100bc1336e7242eac": "6f6be878838b67edd6ee18114f644d93",
".git/objects/e1/17b77a5e38808954643b81e253defba3c61ca3": "4af62adb08664a928b5fd887bfac17c4",
".git/objects/e2/f345d114a9a59662dfcd22687a92a4e4586e71": "bc32eee3cbe348f1f1bf80a0a046cf81",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/4fa17c764b6cc8a22218a6a4aca59cd0684f67": "c1f8480f0431db43d95b4f06b01baaaf",
".git/objects/e8/a8d9955573ef7243fbb7c1eea35d0e310d8421": "9e5b86601899210a744243a47dee5e02",
".git/objects/e9/ba29d9c57ba070d47125b7926aac275f896260": "9bef37a68815d443f59b842e83f490cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/7c68ff5dfbc90f37b9f5f57c33e19bc47cb6ea": "c589cc7b54b8c2279ac0b36dd848f0dd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/7039584d99aea2435f217cc057c6c2340a1871": "d7b148a91d7237bb3ce41b9a2f039308",
".git/objects/f5/39466eae0da452c43430b2ba154b905f83d9c4": "064c787b82093b7440fa832ea94cce61",
".git/objects/fa/23c460661460e391a74c7ced48f6f0e2280418": "5fdd7cbc3af87f500e39ac9e6cc9c6a7",
".git/objects/fb/61931c6cf97b89d74c87d88c2d8e214befe0fb": "609cfe20528f54b1f6519827967aface",
".git/objects/fd/49174e39823d307e3dc003a4cefb5c4a20bc41": "fe50e8177e7713616479461f14659d81",
".git/ORIG_HEAD": "ff13df9995bbe1ec5e7847e31cded62e",
".git/refs/heads/main": "4c6374113ae41bf6989ab0e168cd0f40",
".git/refs/remotes/origin/main": "4c6374113ae41bf6989ab0e168cd0f40",
"assets/AssetManifest.bin": "9a8c95d471fc2fc47dfc37073a5e7578",
"assets/AssetManifest.bin.json": "85a3f19e9104f1288eb70eefabb0eb9f",
"assets/AssetManifest.json": "3c0b68a793b3597220fd51f3dfc30df1",
"assets/assets/images/air_cargo.jpg": "f028c929c8282321871b5a7f22358bff",
"assets/assets/images/balloproduct.jpg": "6ca1404540249701187f9dbbe40890a4",
"assets/assets/images/ballot_3.jpg": "6d32b70f10fe2e308b23bc10d843a84f",
"assets/assets/images/ballot_pro_1.jpg": "35242b07885ff0759b6a3e0bd1634577",
"assets/assets/images/boxcarsoul.jpg": "c80c2a2dad787e450b053d469e9c044c",
"assets/assets/images/fugmation.jpg": "fd5e3770fe42e87a7fafbca1dd497019",
"assets/assets/images/instagramicon.png": "e869727b8637b7fd2081545bcbcd7b40",
"assets/assets/images/lashing.jpg": "a591267e5fbdfb3c6569568cff894387",
"assets/assets/images/packagematerial.jpg": "472f7f8e7bae9545f1b2939c03201061",
"assets/assets/images/palletpaz.webp": "b5311e8f00d92f46bfbbfcbf0698f6f9",
"assets/assets/images/plywoodbox.png": "4a4ade9cf11c0ef21e204923f8f73cce",
"assets/assets/images/ppet.png": "2317827b2af46bff4a05ded83d5daebb",
"assets/assets/images/rubberwood.png": "647a44fdb9861cdcb8b3df90c93c6046",
"assets/assets/images/saiicon.jpg": "e9be8f029d3c8edae4d60f8663b82b18",
"assets/assets/images/seawcarousal.jpg": "4bf458db9acd957120eb430c29f093b8",
"assets/assets/images/seaworthy.jpg": "abe093b15dc93d662e8e9fb11531438e",
"assets/assets/images/ship.jpg": "77c6c9dde24b151af29dfdb0e2e02879",
"assets/assets/images/shippingmain.jpg": "df9d4e425e8c3e35b9b3b9414426ca46",
"assets/assets/images/truckload.jpg": "8be4f8129f26424264ab0193719fc8a5",
"assets/assets/images/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/images/typewooden.png": "ccda9aec64475b5407daa9ab7d6df58d",
"assets/assets/images/vaccum.jpg": "72a0f04f92a2fddbe268d3b02f10a47a",
"assets/assets/images/vci.jpg": "e9eac65d6dbbab93353b406e9e476b96",
"assets/assets/images/vcicar.jpg": "5d38a6b650520f7f46827bdbc846563b",
"assets/assets/images/woodencrates.jpg": "76d624adba709861b255bc3015ca1eed",
"assets/assets/images/woodenPallet.jpg": "b018ae8bea0dd8ac713422d68701934c",
"assets/assets/images/youtube.png": "c0069d2eae4aca08b2c4f4dc5210016b",
"assets/assets%255Cimages%255Cair_cargo.jpg": "f028c929c8282321871b5a7f22358bff",
"assets/assets%255Cimages%255Cballoproduct.jpg": "6ca1404540249701187f9dbbe40890a4",
"assets/assets%255Cimages%255Cballot_3.jpg": "6d32b70f10fe2e308b23bc10d843a84f",
"assets/assets%255Cimages%255Cballot_pro_1.jpg": "35242b07885ff0759b6a3e0bd1634577",
"assets/assets%255Cimages%255Csaiicon.jpg": "e9be8f029d3c8edae4d60f8663b82b18",
"assets/assets%255Cimages%255Cship.jpg": "77c6c9dde24b151af29dfdb0e2e02879",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6c0644a234b51f6e0c7f98f1ff42e432",
"assets/NOTICES": "5a4cb1a17ce615260e6b97318b2f8293",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a4cfb468546ad8a9f9d301f02f235f98",
"/": "a4cfb468546ad8a9f9d301f02f235f98",
"main.dart.js": "e70418e6c33c931bdf1385b6eba2841b",
"manifest.json": "3d4f29a91577336bb7492449310d95da",
"version.json": "9edbcfa7b92cddbc061ffb3043de7790"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
