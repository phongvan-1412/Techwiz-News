import {
  GET_BLOGS,
  GET_BLOGS_BY_CATEGORY,
  GET_BLOGS_BY_ID,
} from "../actions/types";

const initialState = {
  spotlights: [
    {
      blog_id: 1,
      blog_title: "LoremipsumLoremipsumdolori",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "Loremipsum.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "PhongVan",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 2,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "222222222222.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "PhongVan",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 3,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "444444444444.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "PhongVan",
      admin_name: "Phong",
      blog_status: 1,
    },
    {
      blog_id: 4,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "666666666666.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 5,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "777777777777.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 6,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!?",
      blog_thumbnail_name: "5555555555555.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 7,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "aaaaaaaaaaaaaa.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 8,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "eeeeeeeeeeee.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 9,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "88888888888888.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
    {
      blog_id: 10,
      blog_title: "Lorem ipsum",
      blog_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in quos aspernatur, velit a voluptas commodi, consequuntur, assumenda quae ducimus provident at itaque voluptatem dolorum quas porro vel blanditiis nisi repellat! Nesciunt consectetur hic ex nisi. Laborum, consequatur delectus! Hic repudiandae ipsa sed asperiores architecto cumque et, consequuntur enim tempora voluptates, voluptate accusamus explicabo temporibus debitis corrupti. Consectetur accusantium optio natus aliquam recusandae, nisi ea incidunt ullam voluptate molestiae excepturi nulla ipsa inventore autem! Illum mollitia rerum velit adipisci pariatur voluptatem similique praesentium numquam nulla consequatur harum esse, sequi quisquam odit saepe nihil obcaecati illo id. Autem quo fugiat repellendus a fuga voluptate eveniet id enim aliquam modi culpa consectetur quam, nisi laborum, mollitia voluptatem dolores qui eligendi voluptatibus alias expedita error quod assumenda commodi! Ex accusamus eligendi ullam molestias adipisci laudantium odio pariatur ducimus culpa vero tempora rerum, praesentium laboriosam fugit, eius aut, officiis alias nobis eum cum iusto. Libero dicta maiores sunt dolorum veniam deserunt laborum ipsam quasi asperiores! Ea, possimus labore. Dolorem autem a maxime ut impedit, numquam officiis voluptatibus veniam ipsam assumenda velit mollitia sed non incidunt repudiandae quisquam dolorum ex at commodi et voluptas quam maiores eligendi aliquid! Laudantium atque consequatur aut eaque perferendis eos. Distinctio nisi animi architecto rem error consequuntur accusamus, optio dolore, excepturi magni asperiores totam fugit laboriosam aperiam quas nesciunt ex! Neque, magni voluptatem maxime blanditiis in sequi dicta sit corrupti obcaecati modi fuga iste sunt repellat est ratione explicabo libero quis amet veritatis. Earum soluta quidem numquam iusto officia veniam harum illo eaque repudiandae deleniti asperiores quibusdam ducimus, explicabo, aperiam consequatur quam rerum assumenda quisquam incidunt. Ullam fugiat deserunt repellendus, provident sed dolore dolorum numquam inventore culpa odio iure iusto aspernatur, alias neque quibusdam beatae quam voluptate suscipit? Similique expedita nihil deserunt quo molestiae aspernatur necessitatibus officia dolorem quidem laboriosam!",
      blog_thumbnail_name: "999999999999999.jpg",
      blog_video_name: "https://www.youtube.com/embed/AbZH7XWDW_k",
      blog_day_open: "28/04/1996",
      category_name: "Phong",
      admin_name: "PhongVan",
      blog_status: 1,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        spotlights: action.payload
      };
    case GET_BLOGS_BY_CATEGORY:
      return {
        ...state,
        spotlights: state.spotlights.filter(
          (spotlight) => spotlight.category_name === action.payload
        )
      };
    case GET_BLOGS_BY_ID:
      return {
        ...state,
        spotlights: state.spotlights.filter(
          (spotlight) => spotlight.blog_id === action.payload
        )
      };
    default:
      return state;
  }
}
