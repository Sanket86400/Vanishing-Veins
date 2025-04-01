var config = 
{
     style: 'mapbox://styles/dhvani09/cm8seraw100f801qz7mt56pco',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGh2YW5pMDkiLCJhIjoiY2x2YXZnNTBxMDJhZTJpcnNlN3cxY3p3MiJ9.hMtGRHXe8rFtexZTwbdK4A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#3FB1CE'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Vanishing Veins of Central India',
    subtitle: '',
    byline: 'By: Sanket Hajare | Guide: Prof.Chakradhar & Jitesh Chowdhury | Information Design | NID-B',

    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: 
    [
        {
            id: 'Chapter 1',
            alignment: 'left',
            hidden: false,
            title: 'Overview',
            //image: './assets/san-fran.jpeg',
            description: 'Rivers are the essence of life, sustaining ecosystems and keeping this very Planet Earth alive. In India, they have shaped cultures, communities, and served as lifelines for many cities to thrive. Yet many rivers vanishng from the Map. The realization to revive them often comes only when the damage is undeniable and irreversible!',
            location: {
                center: [79.08200, 21.15097],
                zoom: 1.24,
                pitch: 0,
                bearing: 0,
                viewport: 
                [
                    [-180.00000, -56.55754], 
                    [180.00000, 90.00000]
                ]//zoom out to show the whole world
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'true',
            onChapterEnter: [
                {
                    layer: 'india-map-profile',
                    opacity: 1,
                    duration: 5000
                }
                ],
                onChapterExit: [
                {
                    layer:'india-map-profile',
                    opacity: 0,
                    duration: 5000
                }
            ]
        },
        {
            id: 'Chapter 2',
            alignment: 'left',
            hidden: false,
            title:'Another day, Another River',
            //image: './assets/san-fran.jpeg',
            description: 'Amid this fading legacy, one river stands on the brink of reclaiming its identity. This is the story of the Nag River — the umbilical cord of Nagpur (a city in Central India.)',
            location: {
                center: [79.08200, 21.15097],
                zoom: 3.85,
                pitch: 0,
                bearing: 0,
                viewport: 
                [
                    [19.80764, -4.89108], 
                    [138.35359, 34.86531]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                layer: 'maharashtra-state-map-new',
                opacity: 1,
                duration: 1000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'maharashtra-state-map-new',
                    opacity: 0,
                    duration: 3000,
                }
            ]
        },

        {
            id: 'Chapter 3',
            alignment: 'right',
            hidden: false,
            title: 'Nag Nadi to Nag Nala: The Vanishing Alert?',
            //image: './assets/Money Spent.jpg',
            description: 'Nagpur, the city named after the Nag River, once a symbol of pride and identity- now reduced to a polluted drain. Can this water vein be rejuvenated, or is it destined to vanish forever?',
            location: {
                center: [79.12757, 21.14075],
                zoom: 11.85,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
           onChapterExit: []
        },
        {
            id: 'Chapter 4',
            alignment: 'left',
            hidden: false,
            title: 'Ambazari Lake as Origin (At Present)',
            //image: './assets/washington-dc.jpg',
            description: 'The city identifies the spillway of Ambazari Lake Dam/Weir as the Origin Point of Nag River.',
            location: {
                center:[79.04129, 21.12922],
                zoom: 13.52,
                pitch: 0,
                bearing: 0,
              },  
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [
                  {
                    layer: 'ambazari-lake',
                    opacity: 1,
                    duration: 5000,
                  }
                ],
                onChapterExit: [
                  {
                    layer: 'ambazari-lake',
                    opacity: 0,
                    duration: 5000,
                  },
              ] 
        },
        {
          id: 'Chapter 5',
          alignment: 'right',
          hidden: false,
          title: 'The Confluence with Pili River',
          description: 'Stretching approximately 17 km within the city, the Nag River merges with the Pili River at the outskirts of Nagpur. Now reduced to an average width of just 12-40 meters and a depth of 2-4.5 meters, the river is struggling to survive.',
          location: 
          {
              center: [79.17544, 21.16756],
              zoom: 11.5,
              pitch: 0,
              bearing: 0,
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
                  layer: 'nag-river-16-km',
                  opacity: 1,
                  duration: 3500,
              },
              {
                  layer: 'pili-river-from-gorewada',
                  opacity: 1,
                  duration: 3500,
              }
          ],
          onChapterExit: [
              {
                  layer: 'nag-river-16-km',
                  opacity: 0,
                  duration: 3000,
              },
              {
                  layer: 'pili-river-from-gorewada',
                  opacity: 0,
                  duration: 3000,
                },
              ]    
        },
        {
            id: 'Chapter 6',
            alignment: 'right',
            hidden: false,
            //image: './assets/Money Spent.jpg',
            title: 'What Nag River means to people today?',
            description:'The Nag river today is called a mere drain(naala) running from the city until you know how it was the only source of life. The river was not just used but worshiped by the people . Raghuji Bhonsl -II played a crucial role in expanding the citys water infrastructure, reinforcing Nagpurs reputation as the City of Ponds and Gardens.',
            location: 
            {
                center: [79.17544, 21.16756],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
              {
                //layer: 'nag-river-16-km',
                //opacity: 1,
                //duration: 1000
              }
            ],
            onChapterExit: [
              {
                //layer: 'nag-river-16-km',
                //opacity: 0,
                //duration: 5000
              }
            ]    
        },

        {
            id: 'Chapter 7',
            alignment: 'center',
            hidden: false,
            title: 'What History says?',
            //image: './assets/buenos-aires.jpg',
            description: 'It is said that people form Nag dynasty used to live on the banks of Nag river in ancient times,In view of the urbanization of Delhi in the 18th century, Gond King Bakht Buland Shah found Nagpur city, which was situated on the banks of Nag river, and made it his capital which was earlier Devgarh (Madhya Pradesh), Chhindwara. The Nag river was used for drinking water, bathing and religious work in the earlier time. The Bhosale king during that period developed beautiful temples, palaces, gardens, ghats, burial sites and Kashibai Ghat.',
            location: 
            {
                center: [79.02819, 21.14469],
                zoom: 12.05,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation:false,
            onChapterEnter:[],
            onChapterExit: [],    
        },

        {
          id: 'Chapter 8',
          alignment: 'left',
          hidden: false,
          title: 'Lava Hills: The Vanished Basin',
          //image: './assets/buenos-aires.jpg',
          description: 'Geological evidence reveals that its actual source lies in the Lava Hills, with lineaments governing the flow of the Nag River, Pili River, and their tributaries.',
          location: 
          {
              center: [78.98055, 21.16608],
              zoom:13.09,
              pitch: 0,
              bearing: 0,
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
                layer: 'lava-hills',
                opacity: 1,
                duration: 1500,
              }
            ],
            onChapterExit: [
              {
                layer: 'lava-hills',
                opacity: 0,
                duration: 1500,
              }
            ]   
       },

       {
         id: 'Chapter 9',
         alignment: 'left',
         hidden: false,
         title: 'The River Basin at Risk!: NEERI investigates',
         //image: './assets/buenos-aires.jpg',
         description: 'Investigations reveal rampant sandstone mining in Lava Hills, while unchecked urbanization turns natural landscapes into concrete jungles, reducing groundwater seepage. NEERIs report confirms the presence of a 7th-order stream, identifying the drain as the true Nag River.',
         location: 
         {
          center: [78.98055, 21.16608],
          zoom:13.09,
          pitch: 0,
          bearing: 0,
         },
         mapAnimation: 'flyTo',
         rotateAnimation: false,
         callback: '',
         onChapterEnter: [
              {
                layer: 'lava-hills',
                opacity: 1,
                duration: 1500,
              }
            ],
            onChapterExit: [
              {
                layer: 'lava-hills',
                opacity: 0,
                duration: 1500,
              }
            ]     
       },

       {
         id: 'Chapter 10',
         alignment: 'left',
         hidden: false,
         title: 'From lava to Ambazari Lake',
         //image: './assets/buenos-aires.jpg',
         description: 'Ambazari Lakes water source, once fed by the Lava drain, has given way to urbanization, leaving only faint traces of its former surface water runoff channels.',
         location: 
         {
          center: [78.99343, 21.15345],
          zoom: 14.10,
          pitch: 0,
          bearing: 0,
         },
           mapAnimation: 'flyTo',
           rotateAnimation: false,
           callback: '',
           onChapterEnter: [
              {
                layer: 'lava-to-ambazari-drain',
                opacity: 1,
                duration: 1500,
              }
            ],
            onChapterExit: [
              {
                layer: 'lava-to-ambazari-drain',
                opacity: 0,
                duration: 1500,
              }
            ]     
        },

        {
          id: 'Chapter 11',
          alignment: 'left',
          hidden: false,
          title: 'Increased catchment and Shrinked Size of Lake',
          //image: './assets/buenos-aires.jpg',
          description: 'Ambazari Lake has significantly reduced in size due to the expansion of its catchment area. This shrinkage has led to lower dissolved oxygen (DO) levels, which are crucial for supporting aquatic life. Despite these challenges, the lake maintains a Water Quality Index (WQI) of 75, indicating Good water quality. ',
          location: 
          {
            center:[79.03647, 21.12852],
            zoom:13.83,
            pitch: 49.50,
            bearing: -31.20,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter:  [
              {
                layer: 'ambazari-catchment-area',
                opacity: 1,
                duration: 5000,
              }
            ],
            onChapterExit: [
              {
                layer: 'ambazari-catchment-area',
                opacity: 0,
                duration: 5000,
              },
             ]     
         },

         {
          id: 'Chapter 12',
          alignment: 'left',
          hidden: false,
          title: 'The flow aspires to become River at this Point',
          image: './assets/Ambazari Overflow.png',
          description: 'Ambazari Lake, built by Bimbaji Bhosale around 259 years ago, was a vital water source for Nagpur. Using an intricate stone and terra-cotta pipeline system, it supplied water to the city, supporting gardens and daily needs. ',
          location: 
          {
            center:[79.04338, 21.12460],
            zoom:17.91,
            pitch: 57.01,
            bearing: -44.80,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               {
                  layer: 'ambazari-lake',
                  opacity: 1,
                  duration: 1500,
               }
             ],
             onChapterExit: [
               {
                layer: 'ambazari-lake',
                opacity: 1,
                duration: 2500,
               }
             ]     
         },

         {
          id: 'Chapter 13',
          alignment: 'left',
          hidden: false,
          title: 'Drastic Drop in WQI from 75-35 within 2 km',
          image: './assets/Nag RiverShankar Nagar.jpg',
          description: 'The WQI suddenly drops to 35 just at the Shankar Nagar. The underground drainage system hides most of the contamination.',
          location: 
          {
            center:[79.06093, 21.13500],
            zoom:14.79,
            pitch: 0,
            bearing: -16,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'shankar-nagar-zone',
                 opacity: 1,
                 duration: 5000,
               },
               {
                layer: 'nag-river-16-km',
                opacity: 1,
                duration: 2000
              },
             ],
             onChapterExit: [
               {
                 layer: 'shankar-nagar-zone',
                 opacity: 0,
                 duration: 5000,
               },
               {
                layer: 'nag-river-16-km',
                opacity: 0,
                duration: 2000
               }
             ]     
         },

         {
          id: 'Chapter 14',
          alignment: 'right',
          hidden: false,
          title: 'Sangameshwar temple',
          image: './assets/Sangameshwar Temple Ghats.jpg',
          description: 'A significant drain from Futala Lake merges here, carrying untreated waste from nearby dwellings along the riverbanks. Once a place for religious ceremonies and community events, the temple now highlights the serious neglect of these important waterways. ',
          location: 
          {
            center:[79.08176, 21.14050],
            zoom:13.54,
            pitch: 0,
            bearing: 0,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'futala-drain-to-sangameshwar',
                opacity: 1,
                duration: 2000,
              },
              {
                layer: 'nag-river-16-km',
                opacity: 1,
                duration: 2000,
              },
              
            ],
            onChapterExit: [
              {
                layer: 'futala-drain-to-sangameshwar',
                opacity: 0,
                duration: 2000,
              },
              {
                layer: 'nag-river-16-km',
                opacity: 0,
                duration: 2000
               }
            ],     
         },

         {
          id: 'Chapter 15',
          alignment: 'right',
          hidden: false,
          title: 'Heritage at Risk',
          image: './assets/Sangameshwar Temple Old Photo.png',
          description: 'In 1779, Raghuji IIs mother and Mudhojis wife Chimabai built Lord Mahadevs temple at this point of confluence. Raghuji II and his family frequently visited this site for the religious purposes. Bhosale King used to wash his horses and elephants at this site on the day of Dusshera (Vijayadashmi). The water was deep enough that an elephant could drown into it.',
          location: 
          {
            center:[79.08186, 21.14032],
            zoom:18.75,
            pitch: 44.45,
            bearing:-35.42,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'sangameshwar-temple-area',
                 opacity: 1,
                 duration: 1500,
               }
             ],
             onChapterExit: [
               {
                 layer: 'sangameshwar-temple-area',
                 opacity: 0,
                 duration: 2000,
               }
             ]     
         },

         {
          id: 'Chapter 16',
          alignment: 'Right',
          hidden: false,
          title: '82% of 450 MLD Sewage Remains Untreated!',
          //image: './assets/buenos-aires.jpg',
          description: 'Nag Rivers journey reveals a grim story of neglect, with major drain points contributing to its alarming pollution levels. Out of the massive 450 MLD (Million Litres per Day) of sewage generated, only 80 MLD is treated . A mere 18%. The rest flows untreated into the river, poisoning its waters!',
          location: 
          {
            center:[79.08138, 21.14697],
            zoom:12.47,
            pitch:0,
            bearing:0,
          },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
              {
                layer: 'all-drains-of-nag-river',
                opacity: 1,
                duration: 1500,
              },
              {
                layer: 'nag-river-16-km',
                opacity: 1,
                duration: 2000
              },

            ],
            onChapterExit: [
              {
                layer: 'all-drains-of-nag-river',
                opacity: 0,
                duration: 1000,
              },
              {
                layer: 'nag-river-16-km',
                opacity: 0,
                duration: 1000
              },
             ]     
         },
         {
          id: 'Chapter 17',
          alignment: 'right',
          hidden: false,
          image: './assets/Money Spent.jpg',
          title: 'Crores Spent, yet No Significant Impact, WHY?',
          description:'Despite crores spent on cleaning and treatment, no significant change is possible unless the river is allowed to flow in its natural state. To truly understand rejuvenation, we must first understand - the basin, origin, tributaries, hydrology, geomorphology, ecology, and the biologically rich landscape that shapes its natural system. Like any natural body, a river has an inherent ability to self-maintain. However, it is we, the residents who have misunderstood, disrupted its origin and obstructed its course',
          location: 
          {
              center: [79.17544, 21.16756],
              zoom: 11.5,
              pitch: 0,
              bearing: 0,
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          onChapterEnter: [
            {
              layer: 'nag-river-16-km',
              opacity: 1,
              duration: 1000
            }
          ],
          onChapterExit: [
            {
              layer: 'nag-river-16-km',
              opacity: 0,
              duration: 5000
            }
          ]    
      },
         {
          id: 'Chapter 18',
          alignment: 'right',
          hidden: false,
          title: 'Is this the Vanishing Vein?',
          //image: './assets/buenos-aires.jpg',
          description: 'With unchecked urbanization, the Nag, Pili, and Pohra rivers (Veins) have become channels of waste, endangering the Gosikhurd Dam and depleting groundwater. If neglected, these veins of the city may collapse within 25 years, leaving a dry and lifeless legacy.',
          location: 
          {
              center: [79.17544, 21.16756],
              zoom: 11.5,
              pitch: 0,
              bearing: 0,
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter:  [
              {
                layer: 'vanishing-vein-vector',
                opacity: 1,
                duration: 1500,
              }
            ],
            onChapterExit: [
              {
                layer: 'vanishing-vein-vector',
                opacity: 0,
                duration: 1500,
              }
            ]    
      },

      {
        id: 'Chapter 19',
        alignment: 'right',
        hidden: false,
        title: 'Will we act before the river takes its last breath?',
        image: './assets/Question Mark.gif',
        //description: 'With unchecked urbanization, the Nag, Pili, and Pohra rivers (Veins) have become channels of waste, endangering the Gosikhurd Dam and depleting groundwater. If neglected, these veins of the city may collapse within 25 years, leaving a dry and lifeless legacy. Will we act before the river takes its last breath?',
        location: 
        {
            center: [79.17544, 21.16756],
            zoom: 11.5,
            pitch: 0,
            bearing: 0,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter:  [
            {
              layer: 'vanishing-vein-vector',
              opacity: 1,
              duration: 1500,
            }
          ],
          onChapterExit: [
            {
              layer: 'vanishing-vein-vector',
              opacity: 0,
              duration: 1500,
            }
          ]    
    },

    ]
};
