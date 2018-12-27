//Size of Letter in City Names
const letter_Height = 10;
const letter_Width = 8;

//Position of the description
const introX = 400;
const introY = 90;
const introWidth = 290;
const introHeight = 330;

var loading, loaded;
var img;
var samples;
var xClicked;
var yClicked;

//Title
var ExploreTW = "Hover to explore different parts of Taiwan"

//Description of cities
var Taipei = "The capital and most populous city" +
  " in Taiwan. A modern cosmopolitan metropolis" +
  " with amazing city view filled with skyscrapers." +
  " Visit Taipei 101 (world's tallest building" +
  " 2004-2010), National Palace Museum (one of" +
  " the best collections of Chinese art), Beitou" +
  " Hot Spring, Shilin Night Market, Raohe Night Market."
var Taoyuan = "You will arrive at Taoyuan" +
  " International Airport if you fly from West" +
  " Coast. The city provides abundant cultural" +
  " diversity and natural attractions. Visit" +
  " Chiang Kai-Shek and Chiang Ching-Kuo" +
  " Cultural Park, Daxi District and Old Street, " +
  " Yeheng Terraces, Lala Mountain, Little" +
  " Wulai Scenic Area."
var Hsinchu = "Home to the largest Hakka" +
  " community in Taiwan and also Hsinchu" +
  " Science Park and Hsinchu Industrial Park," +
  " currently building Hsinchu Biomedical" +
  " Science Park. Visit Beipu Old Street &" +
  " Cold Spring, Guanwu Nat’l Forest, Hukou" +
  " Old Street, Xinpu Township, Shei-Pa National" +
  " Park, Hsinchu City God Temple, Yin Hsi" +
  " East Gate, Green Grass Lake."
var Ilan = "Situated in the Lanyang Plain with" +
  " rich soils and meandering streams and rivers. " +
  " Ilan is less than an hour away from Taipei and" +
  " birthplace of the award-winning Kavalan Whisky." +
  " Known for its abundant natural attractions." +
  " National Center for Traditional Arts, Su’ao" +
  " Lighthouse, Guishan Island (Turtle Island), " +
  " Luodong Forestry Culture Park, Luodong Sports" +
  " Park, Taipingshan Nat’l Forest, Mingchi Forest" +
  " Recreation Area, Lanyang Museum, Su’ao" +
  " Cold Springs, Jiaoxi Hot Springs, Dali."
var Miaoli = "Pleasant climate and convenient" +
  " transportation. Visitors usually come for the" +
  " Hakka Tung Blossom Festival between April" +
  " to May, wood sculpture, hot springs, fruits," +
  " ceramics, and Hakka food. Visit Sanyi Wood" +
  " Sculpture Museum and Old Mountain Line" +
  " Tourism Area, Hakka Round House, Huoyan" +
  " Mountain, Dahu Strawberry Culture Park," +
  " Nanzhuang Lion’s Head Mountain Scenic" +
  " Area, Taiwan Hot Spring Scenic Area."
var Taichung = "The second largest city of" +
  " Taiwan with a mild year-round climate of" +
  " an average of 72 degrees F. Highly-developed" +
  " city since the Japanese occupation period" +
  " with rich culture, history, and natural" +
  " attractions. Visit National Taiwan Museum" +
  " of Fine Arts, Tunghai University, Guguan Hot" +
  " Springs, Gaomei Wetlands, National Taichung" +
  " Theater, Fengjia Night Market, Taichung" +
  " Confucius Temple, Dajia Jenny Lynn Temple."
var Changhua = "The breadbasket of Taiwan" +
  " for its fertile land, it was one of the earliest" +
  " settlements and developments with immigrants" +
  " mainly from the Chinese provinces of Guangdong" +
  " and Fujian. Visit Baguashan Great Buddha, " +
  " Longshan Temple, Lukang Township, Wanggong" +
  " Fishing Port, and Taiwan Glass Hall."
var Yunlin = "A county that built on agriculture" +
  " with 90 percent of the land is plains. The county" +
  " is also the birthplace and the capital of a" +
  " well-known Taiwanese puppet theater. Visit" +
  " Caoling, Xiluo Bridge, Beigang Chaotian Temple," +
  " Jianhusan Fancy Amusement Park."
var Chiayi = "Home to 3 National Scenic Areas: " +
  "Alishan National Scenic Area, Southwest Coast" +
  " National Scenic Area, Siraya National Scenic Area." +
  " Visit Alishan for spectacular sunrise views" +
  " and cloud formations, Budai and Dongshi for" +
  " coastal ecology, views, and fishing industry." +
  " The Tropic of Cancer also passes here."
var Nantou = "The only county that is landlocked" +
  " in Taiwan. Nantou county offers an" +
  " abundant amount of natural sceneries." +
  "Visit Yushan (meaning Mt. Jade, also Taiwan's" +
  " highest peak), Sun Moon Lake (also" +
  " known as the most beautiful lake of" +
  " Taiwan), Qingjing Farm, Aowanda" +
  " National Forest, Lugu Tea Culture Center," +
  " Shuili Snake Klin, Xitou, Taroko National" +
  " Park, and Hehuanshan National Forest."
var Tainan = "The oldest city in Taiwan. Built" +
  " in 1661, became the political, economic" +
  " and cultural center of Taiwan between" +
  " 1885 to late nineteenth century. Thus," +
  " Tainan offers many historic and cultural" +
  " attractions. One of Taiwan’s most famous" +
  " festivals is held here on the 15th of the" +
  " first lunar month annually, the exilarating" +
  " Yenshui Beehive Rockets Festival, one" +
  " that you have to wear protective gear" +
  " to enjoy. Visit Taiwan Confucian Temple" +
  " (1665), Qigu Mangrove Tourist Park," +
  " Guanziling mud springs."
var Kaohsiung = "The largest industrial city" +
  " and the third most populous city in" +
  " Taiwan. Kaohsiung is usually sunny" +
  " year-round and home to many" +
  " ethnic groups, Hokkien, Hakka," +
  " and many other indigenous tribes." +
  " Visit the Love River, Xiziwan Bay," +
  " the Hakka village of Meinong for" +
  " oil paper umbrella art, the Fo Guang" +
  " Shan Buddhist monastery."
var Pingtung = "The southernmost county" +
  " with spring-like weather year round," +
  " making it ideal for water sports as well" +
  " as a stop for migratory birds in the" +
  " winter, such as gray-faced buzzards." +
  " Visit Kenting National Park, Dapeng" +
  " Bay National Scenic Area, Saijia Air Park." +
  " Local delicacy includes black pearl wax" +
  " apples, pig’s feet, bluefin tuna, and many more."
var Hualien = "A 3-hour natural" +
  " escape from Taipei, the majority of" +
  " Hualien is a national scenic area, where two" +
  " national parks join here, Taroko National" +
  " Park and Yushan National Park. Visit Taroko" +
  " National Park for awe-inspiring granite gorge," +
  " Yushan National Park, East Coast National" +
  " Scenic Area, and East Rift Valley National" +
  " Scenic Area. Local delicacy here is Sunfish."
var Taitung = "Nicknamed The Garden of" +
  " Taiwan, Taitung offers amazing coastal" +
  " line, natural sceneries and specialty" +
  " seafood items, such as sailfish and skipjack" +
  " tuna. It is well-known amongst cyclists for" +
  " the variety of sceneries offered in different" +
  " bike trails. Visit National Museum of" +
  " Prehistory, Zhiben Hot Springs and National" +
  " Forest Recreation, Chulu Ranch, Luye" +
  " Recreational Tea Farm, Fugang Fishing Harbor"
var Penghu = "An offshore island comprised" +
  " of basalt columns carved by the elements" +
  " is an international hot spot for competitive" +
  " sailing for its clear waters and strong winter" +
  " winds. Firework festivals in spring and" +
  " summer and the Penghu Seafood Carnival" +
  " in fall and winter to enjoy fresh catch of" +
  " the sea. Regular flights and charters flights" +
  " are offered throughout major cities in" +
  " Taiwan as well as nearby cities of" +
  " Mainland China, such as Xiamen."
var Chimei = "The old battlefront of Taiwan." +
  " Chimei or Kinmen means Golden Gate," +
  " for its geographic location against" +
  " pirates (late 1300s) and mainland" +
  " forces. Kinmen opened for tourism after" +
  " the military administration was lifted in" +
  " 1992. Most attractions in Kinmen are" +
  " to military installations. Recent years" +
  " government has focused on conservation effort" +
  " to protect and restore local ecology, especially" +
  " when its coastal line is home to some rare" +
  " and protected species, including Chinese" +
  " otter and horseshoe crab."
var GreenIsland = "An offshore island close to" +
  " Taitung, it is easy to tour around the" +
  " island for most of its attractions since" +
  " it has a round-the-island highway. It is" +
  " also great for snorkeling because the" +
  " island is also surrounded by amazing" +
  " coral reefs! Soaking in Zhaori Hot Spring," +
  " one of the three saltwater hot springs" +
  " in the world, under the stars at night is" +
  " one of the most popular tourist activities."
var Lanyu = "Lanyu, meaning Orchid Island," +
  " is a volcanic island for once wild" +
  " orchids grew all over the island." +
  " Due to its climate and oceanic" +
  " current, the marine life is rich and" +
  " thriving here, making it a paradise" +
  " for deep-sea fishing and skin diving." +
  " The Yami people is the dominating" +
  " indigenous tribe living here. Their" +
  " distinct culture revolves around the" +
  " ocean from clothings, boats, to rituals" +
  " and festivals."

// set up canvas size, color, and image
function setup() {

  createCanvas(700, 380);
  background('white');
  console.log('setup');
  loading = false;
  loaded = false;
}

// load image and city description when mouse hovers over a city name
function draw() {
  background('white');
  textFont('Verdana');
  textSize(20);
  fill('green');
  stroke('green');
  strokeWeight(1);
  //text wrap title
  text(ExploreTW, 400, 30, introWidth, introHeight);

  // creates the grey rectangle in the upper left corner
  //  fill('grey');
  //  stroke('grey');
  //  rect(600, 0, 100, 20);

  // sets the color of the text
  //  textSize(10);
  //  fill('black');
  //  stroke('black');

  // writes the text of the current coordinates in the corner
  //  text("x: " + mouseX + " y: " + mouseY, 610, 15);

  // loads the picture
  if (!loading && !loaded) {
    loading = true;
    console.log('start loading');
    loadImage("https://cdn-images-1.medium.com/max/1600/1*4L3fHv1c6Yhy94FUQHUcJw.png", function(i) {
      loaded = true;
      img = i;
    }, function(e) {
      console.log(e);
    })
  }
  if (loaded) {
    image(img, 0, 0);
  }

  //Sets text style for description
  textSize(15);
  fill('black');
  stroke('black');
  strokeWeight();

  //Mouse hover over city names for tourist attractions  
  var hPressed = isWithin(285, 25, 8);
  if (hPressed == true) {
    text(Taipei, introX, introY, introWidth, introHeight);
  } else if (isWithin(210, 15, 7)) {
    text(Taoyuan, introX, introY, introWidth, introHeight);
  } else if (isWithin(190, 38, 7)) {
    text(Hsinchu, introX, introY, introWidth, introHeight);
  } else if (isWithin(290, 72, 4)) {
    text(Ilan, introX, introY, introWidth, introHeight);
  } else if (isWithin(200, 72, 6)) {
    text(Miaoli, introX, introY, introWidth, introHeight);
  } else if (isWithin(178, 98, 8)) {
    text(Taichung, introX, introY, introWidth, introHeight);
  } else if (isWithin(105, 120, 8)) {
    text(Changhua, introX, introY, introWidth, introHeight);
  } else if (isWithin(123, 150, 6)) {
    text(Yunlin, introX, introY, introWidth, introHeight);
  } else if (isWithin(136, 178, 6)) {
    text(Chiayi, introX, introY, introWidth, introHeight);
  } else if (isWithin(196, 140, 6)) {
    text(Nantou, introX, introY, introWidth, introHeight);
  } else if (isWithin(108, 210, 6)) {
    text(Tainan, introX, introY, introWidth, introHeight);
  } else if (isWithin(67, 257, 9)) {
    text(Kaohsiung, introX, introY, introWidth, introHeight);
  } else if (isWithin(118, 308, 8)) {
    text(Pingtung, introX, introY, introWidth, introHeight);
  } else if (isWithin(260, 155, 7)) {
    text(Hualien, introX, introY, introWidth, introHeight);
  } else if (isWithin(207, 240, 7)) {
    text(Taitung, introX, introY, introWidth, introHeight);
  } else if (isWithin(2, 230, 13)) {
    text(Penghu, introX, introY, introWidth, introHeight);
  } else if (isWithin(1, 275, 10)) {
    text(Chimei, introX, introY, introWidth, introHeight);
  } else if (isWithin(265, 285, 13)) {
    text(GreenIsland, introX, introY, introWidth, introHeight);
  } else if (isWithin(290, 350, 6)) {
    text(Lanyu, introX, introY, introWidth, introHeight);
  }
}

// This function returns true if the mouse is hovering over
// the button with the given coordinates, and returns false otherwise.
//
// (Since the height is the same for all the cities,
// I don't need a parameter for this value.
// I also don't need to pass in mouseX and mouseY because I
// can determine that within the function ourselves.)
function isWithin(buttonX, buttonY, numLetter) {
  if (mouseX >= buttonX && mouseX <= buttonX + letter_Width * numLetter &&
    mouseY >= buttonY && mouseY <= buttonY + letter_Height) {
    return true;
  } else {
    return false;
  }
}