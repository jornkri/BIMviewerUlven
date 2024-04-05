/*
 * Copyright 2019 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import HomeSection from "./sections/HomeSection";
import { tsx } from "esri/widgets/support/widget";
import { FloorsSection, Floor} from "./sections/FloorsSection";
import SurroundingsSection from "./sections/SurroundingsSection";
import Collection from "esri/core/Collection";
import {Timetable, DayTimetable} from "./widgets/Timetable/Timetable";

export const portalUrl = "https://arcgis.com";

export const websceneId = "4891686c889a4f1bb266968353d0f859";

export const sections = [
   // Check the different files
   // to adapt to your need
   // or create a new section by
   // implement a subclass from `Section`
   
   // The about Turangua section:
   new HomeSection({
      content: (that: any) => (<p></p>),
      timetable: new Timetable({
         dates: new Collection([
           new DayTimetable({
             opens: "8:00",
             closes: "16:00"
           }),
           new DayTimetable({
             opens: "8:00",
             closes: "16:00"
           }),
           new DayTimetable({
             opens: "8:00",
             closes: "16:00"
           }),
           new DayTimetable({
             opens: "8:00",
             closes: "16:00"
           }),
           new DayTimetable({
             opens: "8:00",
             closes: "16:00"
           })
         ])
      })
   }),

   new FloorsSection({
    floors: new Collection([
     new Floor({
       title: "He Hononga",
       subtitle: "connection",
       audio: "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/He-Hononga.mp3",
       floor: 0,
       content: (that: any) => (<div id="connection" bind={that} key={that}><p><span>Open an hour earlier than the rest of the building on weekdays, He Hononga | Connection, Ground Level is the place to return library items, collect holds, browse magazines, DVDs and new arrivals, visit the café or interact with the Discovery Wall.</span></p></div>)
     }),
     new Floor({
       title: "Hovedetasje",
       subtitle: "Inngang",
      //  audio: "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Hapori.mp3",
       floor: 1,
       content: (that: any) => (<div id="community" bind={that} key={that}><p><span>Her kan man registrere seg som gjest, spise lunsj, osv</span></p></div>)
     }),
     new Floor({
       title: "Tuakiri",
       subtitle: "identity",
       audio: "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Tuakiri.mp3",
       floor: 2,
       content: (that: any) => (<div id="identity" bind={that} key={that}><p><span>Find resources and services to help you develop your knowledge about your own identity, your ancestors, your whakapapa and also about the place that they called home – its land and buildings.</span></p></div>)
     }),
     new Floor({
       title: "Tūhuratanga",
       subtitle: "discovery",
       audio: "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/T%C5%ABhuratanga.mp3",
       floor: 3,
       content: (that: any) => (<div id="discovery" bind={that} key={that}><p><span>Explore the nonfiction collection with thousands of books on a huge range of subjects. Get help with print and online resources for research or recreation. Use the public internet computers or, for those who want a low-key space to read or study, there is a separate room called &lsquo;The Quiet Place&rsquo;. Study, research or browse for some recreational reading.</span></p></div>)
     }),
     new Floor({
       title: "Geodata AS",
       subtitle: "home of the maps",
      //  audio: "https://my.christchurchcitylibraries.com/wp-content/uploads/sites/5/2019/01/Auahatanga.mp3",
       floor: 4,
       content: (that: any) => (<div id="creativity" bind={that} key={that}><p><span>
       Welcome to Geodata's floor, where we delve into the realm of maps and Geographic Information Systems (GIS). Here, our passion lies in the dynamic intersection of geography and technology, constantly exploring the latest advancements to enhance our understanding of the world around us.</span></p></div>)
     })
   ])
 }),
 // Surroundings:
 new SurroundingsSection({})
];

export const floorMapping = (originalFloor: number) => {
let floor = originalFloor + 1;
if (floor >= 1) {
  floor += 1;
}

return floor;
}

 export const extraQuery = " AND Category <> 'wall' AND Category <> 'Roofs'  AND Category <> 'wallstandardcase' AND Category <> 'window'";
