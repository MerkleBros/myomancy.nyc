# Myomancy.nyc

Divine the future using rat sightings from [NYC Open Data API](https://dev.socrata.com/foundry/data.cityofnewyork.us/3q43-55fe).

## Development

Obtain a Socrata App Token by creating an account and following the directions [here](https://dev.socrata.com/foundry/data.cityofnewyork.us/3q43-55fe).

Clone the repo and `npm install`, then start a local hot-reload server using `npm run parcel`.

## TODO
- OpenStreetMap tiles shouldn't be used in production unless you pay for them? Find other tiles

## Notes
- workflow for app:
- - User chooses an idol:
- - - Idols: statue of liberty, met museum of art, brooklyn museum of art, grand army plaza, prospect park, central park,
- - - - Could also choose more esoteric NYC locations
- - - User chooses their star sign, perhaps star sign points are arranged in a circular pattern around a central pivot in nyc (the weighted average of all rat sightings)
- - - - Each star sign is randomly placed on a circle at 30degree angles
- - - Compute the divine triangle and count the rat sightings in that triangle in some recent number of sightings, show these sightings as golden stars on the map
- - - - Connect some of the stars to form a series of letters?, have user input a letter they see? Pick random attribute from list of words for that letter
- - - - Can compare rat sightings in the divine triangle versus recent historical data and say whether rat sightings are 'rising', 'falling', 'immovable'
- - - Third point is weighted average of rat sightings in the city ('rat center?')
- - - Could incorporate whether the reading was taken during or after the hour of the rat somehow (11:00pm-1:00am)

### React components
- Root
- - App
- - - IntroView
- - - IdolView
- - - StarSignView
- - - MapView
- - - DivinationView
- - - ContinueButton
- - - IdolButton
- - - StarSignButton

### Layout
- - Root container launches AppControl
- - - App
- - - Controls the app by conditionally rendering the app stages and capturing user choices, calculating state data
- - - State:
- - - - idol
- - - - starSign
- - - - ratGeoJSON
- - - User flow
- - - - User shown intro flash Screen with rat art, explaining what myomancy is and asking them to hit CONTINUE BUTTON to divine the future with NYC rat data
- - - - User hits CONTINUE BUTTON, user shown list of IDOL BUTTONS to choose from, user clicks on an IDOL BUTTON for the given IDOL which saves that idol in state
