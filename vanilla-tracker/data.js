// Real Historical Weather Disaster Data - India 1995-2026 + Human Impact Extended (50 Items)
const HISTORICAL_DATA = [
  { Date: '1996-11-06', Year: 1996, 'Event Type': 'Cyclone', Location: 'Godavari Coast, Andhra', Cost: 1500, Lat: 16.5000, Lng: 82.0000, Deaths: 1057, Injuries: 2000, Displaced: 500000, Vulnerable: 'Coastal Agricultural Zones', HousesDamaged: 150000, Infrastructure: 'Communication networks down, heavy port damage', DamageSeverity: 'High', EnvFactor: 'Wind: 220 km/h', SeverityScore: 7 },
  { Date: '1997-05-22', Year: 1997, 'Event Type': 'Earthquake', Location: 'Jabalpur, Madhya Pradesh', Cost: 300, Lat: 23.0800, Lng: 80.0600, Deaths: 38, Injuries: 1000, Displaced: 50000, Vulnerable: 'Rural Housing, Dense Settlements', HousesDamaged: 8500, Infrastructure: 'Widespread masonry collapses, power outages', DamageSeverity: 'Medium', EnvFactor: 'Magnitude: 5.8', SeverityScore: 5 },
  { Date: '1998-06-09', Year: 1998, 'Event Type': 'Cyclone', Location: 'Kandla, Gujarat', Cost: 3000, Lat: 23.0160, Lng: 70.2160, Deaths: 10000, Injuries: 15000, Displaced: 500000, Vulnerable: 'Port Workers, Coastal Towns', HousesDamaged: 200000, Infrastructure: 'Port facilities decimated, local highways washed out', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 195 km/h', SeverityScore: 9 },
  { Date: '1999-10-29', Year: 1999, 'Event Type': 'Cyclone', Location: 'Odisha Coast', Cost: 4400, Lat: 20.2960, Lng: 85.8245, Deaths: 9887, Injuries: 15000, Displaced: 2500000, Vulnerable: 'Coastal Communities, Fishermen', HousesDamaged: 350000, Infrastructure: 'Complete blackout, 14 bridges destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 260 km/h', SeverityScore: 10 },
  { Date: '2000-09-18', Year: 2000, 'Event Type': 'Flood', Location: 'Hooghly, West Bengal', Cost: 1100, Lat: 22.8900, Lng: 88.3900, Deaths: 1300, Injuries: 5000, Displaced: 2000000, Vulnerable: 'River Delta Farmers', HousesDamaged: 400000, Infrastructure: 'Levee breaches, drinking water polluted', DamageSeverity: 'High', EnvFactor: 'Rainfall: Unprecedented prolonged', SeverityScore: 8 },
  { Date: '2001-01-26', Year: 2001, 'Event Type': 'Earthquake', Location: 'Bhuj, Gujarat', Cost: 7500, Lat: 23.2420, Lng: 69.8110, Deaths: 20023, Injuries: 167000, Displaced: 600000, Vulnerable: 'Rural Villagers, Masonry Dwellers', HousesDamaged: 339000, Infrastructure: 'Hospitals down, huge road fissures', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.7', SeverityScore: 10 },
  { Date: '2002-05-15', Year: 2002, 'Event Type': 'Heatwave', Location: 'Andhra Pradesh', Cost: 400, Lat: 16.5061, Lng: 80.6480, Deaths: 1030, Injuries: 5000, Displaced: 0, Vulnerable: 'Outdoor Labourers, Elderly Populations', HousesDamaged: 0, Infrastructure: 'Grid failures due to peak demand surge', DamageSeverity: 'Medium', EnvFactor: 'Temp: 49°C', SeverityScore: 6 },
  { Date: '2003-05-20', Year: 2003, 'Event Type': 'Heatwave', Location: 'Southern India', Cost: 120, Lat: 15.0000, Lng: 79.0000, Deaths: 1500, Injuries: 8000, Displaced: 0, Vulnerable: 'Daily Wage Labourers', HousesDamaged: 0, Infrastructure: 'Water reservoirs critically low', DamageSeverity: 'Medium', EnvFactor: 'Temp: 48.5°C', SeverityScore: 6 },
  { Date: '2004-12-26', Year: 2004, 'Event Type': 'Tsunami', Location: 'Tamil Nadu & Andaman', Cost: 3000, Lat: 11.6670, Lng: 92.7330, Deaths: 16279, Injuries: 30000, Displaced: 2700000, Vulnerable: 'Coastal Slums, Small Subsistence Fishermen', HousesDamaged: 500000, Infrastructure: 'Entire coastal villages wiped, ports destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Wave Level: 9m', SeverityScore: 10 },
  { Date: '2005-06-30', Year: 2005, 'Event Type': 'Flood', Location: 'Surat, Gujarat', Cost: 800, Lat: 21.1702, Lng: 72.8311, Deaths: 250, Injuries: 1000, Displaced: 250000, Vulnerable: 'Urban Slum Dwellers, Factory Workers', HousesDamaged: 45000, Infrastructure: 'Urban transport frozen, minor bridge damage', DamageSeverity: 'Medium', EnvFactor: 'River Overflow', SeverityScore: 5 },
  { Date: '2005-07-26', Year: 2005, 'Event Type': 'Flood', Location: 'Mumbai, Maharashtra', Cost: 3500, Lat: 19.0760, Lng: 72.8777, Deaths: 1094, Injuries: 2000, Displaced: 100000, Vulnerable: 'Urban Poor, Slum Dwellers', HousesDamaged: 50000, Infrastructure: 'Suburban rail network halted, severe waterlogging', DamageSeverity: 'High', EnvFactor: 'Rainfall: 944mm/24h', SeverityScore: 9 },
  { Date: '2005-10-08', Year: 2005, 'Event Type': 'Earthquake', Location: 'Uri, Kashmir', Cost: 5000, Lat: 34.4000, Lng: 73.5660, Deaths: 1300, Injuries: 7500, Displaced: 150000, Vulnerable: 'Remote Mountain Communities', HousesDamaged: 70000, Infrastructure: 'High-altitude road blockages, telecommunications heavily severed', DamageSeverity: 'High', EnvFactor: 'Magnitude: 7.6', SeverityScore: 8 },
  { Date: '2006-08-07', Year: 2006, 'Event Type': 'Flood', Location: 'Surat, Gujarat', Cost: 2000, Lat: 21.1702, Lng: 72.8311, Deaths: 150, Injuries: 800, Displaced: 1000000, Vulnerable: 'Diamond Polishers, Small Business Owners', HousesDamaged: 120000, Infrastructure: 'Massive commercial damage, dams overtopped', DamageSeverity: 'High', EnvFactor: 'Reservoir Release', SeverityScore: 7 },
  { Date: '2007-08-05', Year: 2007, 'Event Type': 'Flood', Location: 'North Bihar', Cost: 1400, Lat: 26.1540, Lng: 86.8240, Deaths: 1200, Injuries: 3000, Displaced: 7000000, Vulnerable: 'Subsistence Farmers', HousesDamaged: 400000, Infrastructure: 'Rural transport cut completely, farmland submerged', DamageSeverity: 'High', EnvFactor: 'River Overflow', SeverityScore: 8 },
  { Date: '2008-08-18', Year: 2008, 'Event Type': 'Flood', Location: 'Kosi River, Bihar', Cost: 2000, Lat: 26.1540, Lng: 86.8240, Deaths: 250, Injuries: 500, Displaced: 3000000, Vulnerable: 'Agricultural Labourers, Lowland Villages', HousesDamaged: 300000, Infrastructure: 'Kosi embankment breached, massive hydro damage', DamageSeverity: 'Catastrophic', EnvFactor: 'Embankment Failure', SeverityScore: 9 },
  { Date: '2009-05-25', Year: 2009, 'Event Type': 'Cyclone', Location: 'West Bengal', Cost: 1000, Lat: 22.0000, Lng: 88.0000, Deaths: 149, Injuries: 500, Displaced: 1000000, Vulnerable: 'Sundarbans Villagers, Mangrove Ecosystems', HousesDamaged: 150000, Infrastructure: 'Saline water intrusion into wells, rural grid destroyed', DamageSeverity: 'High', EnvFactor: 'Wind: 110 km/h', SeverityScore: 6 },
  { Date: '2010-08-06', Year: 2010, 'Event Type': 'Flood', Location: 'Leh, Ladakh', Cost: 500, Lat: 34.1520, Lng: 77.5770, Deaths: 255, Injuries: 400, Displaced: 5000, Vulnerable: 'High-Altitude Villages, Local Tribes', HousesDamaged: 1500, Infrastructure: 'Hospitals submerged by mud, BSNL lines destroyed', DamageSeverity: 'High', EnvFactor: 'Rainfall: Cloudburst', SeverityScore: 8 },
  { Date: '2011-09-18', Year: 2011, 'Event Type': 'Earthquake', Location: 'Sikkim', Cost: 500, Lat: 27.7200, Lng: 88.0600, Deaths: 111, Injuries: 300, Displaced: 50000, Vulnerable: 'Himalayan Border Villages', HousesDamaged: 30000, Infrastructure: 'Landslide-triggered highway blockages, military infrastructure struck', DamageSeverity: 'Medium', EnvFactor: 'Magnitude: 6.9', SeverityScore: 6 },
  { Date: '2012-06-25', Year: 2012, 'Event Type': 'Flood', Location: 'Brahmaputra Valley, Assam', Cost: 600, Lat: 26.2000, Lng: 92.9370, Deaths: 124, Injuries: 400, Displaced: 2000000, Vulnerable: 'Majuli Islanders, Tea Workers', HousesDamaged: 80000, Infrastructure: 'Kaziranga park flooded, state highways submerged', DamageSeverity: 'Medium', EnvFactor: 'Flood Level: High', SeverityScore: 6 },
  { Date: '2013-06-16', Year: 2013, 'Event Type': 'Flood', Location: 'Kedarnath, Uttarakhand', Cost: 3800, Lat: 30.7333, Lng: 79.0667, Deaths: 6054, Injuries: 4000, Displaced: 110000, Vulnerable: 'Hillside Villages, Pilgrims', HousesDamaged: 50000, Infrastructure: 'Valley bridges completely washed away, massive road collapses', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: 380mm', SeverityScore: 10 },
  { Date: '2013-10-12', Year: 2013, 'Event Type': 'Cyclone', Location: 'Gopalpur, Odisha', Cost: 4260, Lat: 19.2600, Lng: 84.8600, Deaths: 45, Injuries: 200, Displaced: 1100000, Vulnerable: 'Coastal Residents', HousesDamaged: 250000, Infrastructure: 'Power systems entirely knocked out, widespread tree fall', DamageSeverity: 'High', EnvFactor: 'Wind: 215 km/h', SeverityScore: 8 },
  { Date: '2014-09-02', Year: 2014, 'Event Type': 'Flood', Location: 'Srinagar, J&K', Cost: 16000, Lat: 34.0830, Lng: 74.7970, Deaths: 277, Injuries: 1000, Displaced: 100000, Vulnerable: 'Valley Settlements, Urban Srinagar', HousesDamaged: 80000, Infrastructure: 'Airports disabled, primary hospital flooded', DamageSeverity: 'Catastrophic', EnvFactor: 'Jhelum River Surge', SeverityScore: 9 },
  { Date: '2014-10-12', Year: 2014, 'Event Type': 'Cyclone', Location: 'Visakhapatnam, Andhra', Cost: 3500, Lat: 17.6868, Lng: 83.2185, Deaths: 124, Injuries: 1000, Displaced: 135000, Vulnerable: 'Low-lying Coastal Areas, Indigenous Fishing Industry', HousesDamaged: 40000, Infrastructure: 'Telecom crashed for days, severe commercial flight disruptions', DamageSeverity: 'High', EnvFactor: 'Wind: 185 km/h', SeverityScore: 7 },
  { Date: '2015-05-20', Year: 2015, 'Event Type': 'Heatwave', Location: 'North & Central India', Cost: 400, Lat: 25.0000, Lng: 78.0000, Deaths: 2330, Injuries: 10000, Displaced: 0, Vulnerable: 'Urban Poor, Pavement Dwellers', HousesDamaged: 0, Infrastructure: 'Asphalt melting, grid brownouts', DamageSeverity: 'High', EnvFactor: 'Temp: 47.8°C', SeverityScore: 7 },
  { Date: '2015-05-24', Year: 2015, 'Event Type': 'Heatwave', Location: 'Telangana & AP', Cost: 500, Lat: 17.3850, Lng: 78.4860, Deaths: 2500, Injuries: 50000, Displaced: 0, Vulnerable: 'Outdoor Construction Labourers, Elderly', HousesDamaged: 0, Infrastructure: 'Widespread water stress, critical grid loads', DamageSeverity: 'High', EnvFactor: 'Temp: 48°C', SeverityScore: 8 },
  { Date: '2015-11-10', Year: 2015, 'Event Type': 'Flood', Location: 'Chennai, Tamil Nadu', Cost: 3000, Lat: 13.0827, Lng: 80.2707, Deaths: 500, Injuries: 3000, Displaced: 1800000, Vulnerable: 'Urban Working Class, Migrant Workers', HousesDamaged: 100000, Infrastructure: 'Main airport submerged, massive grid collapse', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: 1049mm', SeverityScore: 9 },
  { Date: '2016-12-12', Year: 2016, 'Event Type': 'Cyclone', Location: 'Chennai, Tamil Nadu', Cost: 3370, Lat: 13.0827, Lng: 80.2707, Deaths: 38, Injuries: 150, Displaced: 150000, Vulnerable: 'Metropolitan Coastal Slums', HousesDamaged: 25000, Infrastructure: 'Thousands of trees uprooted blocking highways', DamageSeverity: 'Medium', EnvFactor: 'Wind: 130 km/h', SeverityScore: 5 },
  { Date: '2017-07-20', Year: 2017, 'Event Type': 'Flood', Location: 'Banaskantha, Gujarat', Cost: 2500, Lat: 24.1830, Lng: 71.8660, Deaths: 224, Injuries: 800, Displaced: 100000, Vulnerable: 'Agricultural Farmers, Desert Communities', HousesDamaged: 15000, Infrastructure: 'Roads washed away, rail networks suspended', DamageSeverity: 'Medium', EnvFactor: 'Heavy Rainfall', SeverityScore: 6 },
  { Date: '2018-08-15', Year: 2018, 'Event Type': 'Flood', Location: 'Kerala', Cost: 5600, Lat: 10.8500, Lng: 76.2710, Deaths: 483, Injuries: 1400, Displaced: 1000000, Vulnerable: 'Hill Slopes, River Basin Residents', HousesDamaged: 100000, Infrastructure: 'Cochin Airport closed, entire villages submerged', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: 2300mm/season', SeverityScore: 9 },
  { Date: '2018-10-11', Year: 2018, 'Event Type': 'Cyclone', Location: 'Srikakulam, Andhra', Cost: 920, Lat: 18.2900, Lng: 83.9000, Deaths: 77, Injuries: 200, Displaced: 300000, Vulnerable: 'Tribal Hilly Areas, Farmers', HousesDamaged: 45000, Infrastructure: 'Power distribution severely damaged, road blocks', DamageSeverity: 'Medium', EnvFactor: 'Wind: 150 km/h', SeverityScore: 6 },
  { Date: '2019-05-03', Year: 2019, 'Event Type': 'Cyclone', Location: 'Puri, Odisha', Cost: 8100, Lat: 19.8134, Lng: 85.8312, Deaths: 89, Injuries: 500, Displaced: 1200000, Vulnerable: 'Marginalized Coastal Groups, Slum Colonies', HousesDamaged: 500000, Infrastructure: 'Massive telecommunication and power infrastructure wipe-out', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 215 km/h', SeverityScore: 9 },
  { Date: '2019-07-15', Year: 2019, 'Event Type': 'Flood', Location: 'Sitamarhi, Bihar', Cost: 1000, Lat: 26.5890, Lng: 85.5020, Deaths: 130, Injuries: 600, Displaced: 8000000, Vulnerable: 'Rural Communities, Subsistence Farmers', HousesDamaged: 300000, Infrastructure: '14 districts submerged, embankments washed away', DamageSeverity: 'High', EnvFactor: 'River Overflow', SeverityScore: 8 },
  { Date: '2019-07-20', Year: 2019, 'Event Type': 'Flood', Location: 'Assam', Cost: 400, Lat: 26.2000, Lng: 92.9370, Deaths: 100, Injuries: 300, Displaced: 5000000, Vulnerable: 'Wildlife Zone Communities', HousesDamaged: 150000, Infrastructure: 'Bridges severely compromised, national parks inundated', DamageSeverity: 'High', EnvFactor: 'Flood Level: Severe', SeverityScore: 7 },
  { Date: '2020-05-20', Year: 2020, 'Event Type': 'Cyclone', Location: 'Sundarbans, West Bengal', Cost: 13000, Lat: 22.5726, Lng: 88.3639, Deaths: 128, Injuries: 1000, Displaced: 4900000, Vulnerable: 'Sundarbans Villagers, Coastal Agricultural Labourers', HousesDamaged: 700000, Infrastructure: 'Massive coastal embankments destroyed, airport flooded', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 160 km/h', SeverityScore: 9 },
  { Date: '2020-05-22', Year: 2020, 'Event Type': 'Flood', Location: 'Brahmaputra Valley, Assam', Cost: 500, Lat: 26.2000, Lng: 92.9370, Deaths: 120, Injuries: 400, Displaced: 5000000, Vulnerable: 'Tea Garden Workers, River Islanders', HousesDamaged: 120000, Infrastructure: 'Tea estates flooded, state transport disrupted', DamageSeverity: 'High', EnvFactor: 'River Overflow', SeverityScore: 7 },
  { Date: '2020-06-03', Year: 2020, 'Event Type': 'Cyclone', Location: 'Alibag, Maharashtra', Cost: 800, Lat: 18.6400, Lng: 72.8700, Deaths: 6, Injuries: 16, Displaced: 100000, Vulnerable: 'Konkan Coastal Villages', HousesDamaged: 10000, Infrastructure: 'Power poles downed, rural supply chains halted', DamageSeverity: 'Low', EnvFactor: 'Wind: 120 km/h', SeverityScore: 4 },
  { Date: '2021-02-07', Year: 2021, 'Event Type': 'Flood', Location: 'Chamoli, Uttarakhand', Cost: 200, Lat: 30.4100, Lng: 79.3290, Deaths: 204, Injuries: 100, Displaced: 1000, Vulnerable: 'Hydroelectric Dam Workers, Remote Villages', HousesDamaged: 50, Infrastructure: 'Two major hydro-power dam projects entirely destroyed', DamageSeverity: 'High', EnvFactor: 'Glacial Burst', SeverityScore: 8 },
  { Date: '2021-05-17', Year: 2021, 'Event Type': 'Cyclone', Location: 'Gujarat Coast', Cost: 2100, Lat: 20.8200, Lng: 70.9630, Deaths: 174, Injuries: 300, Displaced: 200000, Vulnerable: 'Industrial Plant Workers, Offshore Fishers', HousesDamaged: 15000, Infrastructure: 'Offshore oil rigs damaged, heavy port disruptions', DamageSeverity: 'Medium', EnvFactor: 'Wind: 195 km/h', SeverityScore: 6 },
  { Date: '2021-05-26', Year: 2021, 'Event Type': 'Cyclone', Location: 'Balasore, Odisha', Cost: 2800, Lat: 21.4930, Lng: 86.9330, Deaths: 20, Injuries: 150, Displaced: 500000, Vulnerable: 'Coastal Agriculturalists, Fishermen', HousesDamaged: 25000, Infrastructure: 'Widespread agricultural flooding, localized blackouts', DamageSeverity: 'Medium', EnvFactor: 'Wind: 140 km/h', SeverityScore: 5 },
  { Date: '2021-07-22', Year: 2021, 'Event Type': 'Flood', Location: 'Western Maharashtra', Cost: 1300, Lat: 16.7000, Lng: 74.2400, Deaths: 251, Injuries: 100, Displaced: 400000, Vulnerable: 'River Valley Towns, Landslide Prone Regions', HousesDamaged: 40000, Infrastructure: 'Mountain passes blocked, bridge collapses', DamageSeverity: 'High', EnvFactor: 'Rainfall: Extreme', SeverityScore: 7 },
  { Date: '2022-06-15', Year: 2022, 'Event Type': 'Flood', Location: 'Silchar, Assam', Cost: 1200, Lat: 24.8330, Lng: 92.7780, Deaths: 192, Injuries: 800, Displaced: 5400000, Vulnerable: 'Barak Valley Settlements, Border Villages', HousesDamaged: 150000, Infrastructure: 'Entire valley grid inundated, severe waterlogging', DamageSeverity: 'High', EnvFactor: 'Embankment Breach', SeverityScore: 8 },
  { Date: '2023-06-16', Year: 2023, 'Event Type': 'Cyclone', Location: 'Kutch, Gujarat', Cost: 50, Lat: 23.2500, Lng: 68.6000, Deaths: 0, Injuries: 23, Displaced: 100000, Vulnerable: 'Salt Pan Workers, West Coast Fishermen', HousesDamaged: 2000, Infrastructure: 'Electricity pylons uprooted, minor road impacts', DamageSeverity: 'Low', EnvFactor: 'Wind: 115 km/h', SeverityScore: 3 },
  { Date: '2023-07-09', Year: 2023, 'Event Type': 'Flood', Location: 'Himachal Pradesh', Cost: 1200, Lat: 31.1048, Lng: 77.1734, Deaths: 428, Injuries: 1000, Displaced: 15000, Vulnerable: 'Mountain Riverbank Settlements, Nomads', HousesDamaged: 3000, Infrastructure: 'National highways washed away, power stations flooded', DamageSeverity: 'High', EnvFactor: 'Cloudburst Multi-day', SeverityScore: 8 },
  { Date: '2023-10-04', Year: 2023, 'Event Type': 'Flood', Location: 'Teesta Basin, Sikkim', Cost: 300, Lat: 27.5330, Lng: 88.5120, Deaths: 40, Injuries: 120, Displaced: 25000, Vulnerable: 'Dam Operators, Teesta River Towns', HousesDamaged: 1500, Infrastructure: 'Major hydro dam totally breached, army bridges washed out', DamageSeverity: 'High', EnvFactor: 'GLOF (Lake Outburst)', SeverityScore: 8 },
  { Date: '2023-12-05', Year: 2023, 'Event Type': 'Cyclone', Location: 'Chennai, Tamil Nadu', Cost: 500, Lat: 13.0820, Lng: 80.2700, Deaths: 20, Injuries: 150, Displaced: 50000, Vulnerable: 'Dense Urban Neighborhoods, Slums', HousesDamaged: 20000, Infrastructure: 'Airport runway submerged, severe urban transport paralysis', DamageSeverity: 'Medium', EnvFactor: 'Wind: 100 km/h', SeverityScore: 6 },
  { Date: '2024-07-30', Year: 2024, 'Event Type': 'Landslide', Location: 'Wayanad, Kerala', Cost: 500, Lat: 11.6016, Lng: 76.0820, Deaths: 420, Injuries: 397, Displaced: 10000, Vulnerable: 'Tea Plantation Workers, Indigenous Tribes', HousesDamaged: 800, Infrastructure: 'Main bridges destroyed, mountain roads completely erased', DamageSeverity: 'High', EnvFactor: 'Rainfall: 572mm/48h', SeverityScore: 9 },
  { Date: '2025-04-10', Year: 2025, 'Event Type': 'Heatwave', Location: 'Marathwada, Maharashtra', Cost: 1500, Lat: 19.3500, Lng: 75.3200, Deaths: 30, Injuries: 2000, Displaced: 500000, Vulnerable: 'Agriculturists, Water-Scare Cattle Farmers', HousesDamaged: 0, Infrastructure: 'Reservoirs dried entirely, severe structural cracking', DamageSeverity: 'Medium', EnvFactor: 'Temp: 49.5°C', SeverityScore: 7 },
  { Date: '2025-08-15', Year: 2025, 'Event Type': 'Flood', Location: 'Assam-Bengal Border', Cost: 800, Lat: 26.0000, Lng: 89.9000, Deaths: 80, Injuries: 300, Displaced: 1200000, Vulnerable: 'River Islanders, Border Refugees', HousesDamaged: 25000, Infrastructure: 'Border security outposts flooded, embankments damaged', DamageSeverity: 'Medium', EnvFactor: 'River Overflow', SeverityScore: 6 },
  { Date: '2026-05-10', Year: 2026, 'Event Type': 'Cyclone', Location: 'Odisha Coast', Cost: 1500, Lat: 20.0000, Lng: 86.0000, Deaths: 12, Injuries: 100, Displaced: 300000, Vulnerable: 'Fishing Industry, Deep Water Drillers', HousesDamaged: 10000, Infrastructure: 'Ports preemptively closed, power grids safely suspended', DamageSeverity: 'Low', EnvFactor: 'Wind: 155 km/h', SeverityScore: 4 },
  { Date: '1995-01-17', Year: 1995, 'Event Type': 'Earthquake', Location: 'Kobe, Japan', Cost: 100000, Lat: 34.6900, Lng: 135.1955, Deaths: 6434, Injuries: 43000, Displaced: 300000, Vulnerable: 'Urban Residents, Elderly', HousesDamaged: 400000, Infrastructure: 'Massive highway collapses, port facilities destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 6.9', SeverityScore: 10 },
  { Date: '1998-10-22', Year: 1998, 'Event Type': 'Cyclone', Location: 'Central America (Mitch)', Cost: 6000, Lat: 15.0000, Lng: -85.0000, Deaths: 11374, Injuries: 10000, Displaced: 2700000, Vulnerable: 'Hillside Villages, Coastal Poor', HousesDamaged: 500000, Infrastructure: 'Bridges entirely wiped out, massive crop loss', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: 1900mm', SeverityScore: 10 },
  { Date: '1999-08-17', Year: 1999, 'Event Type': 'Earthquake', Location: 'Izmit, Turkey', Cost: 23000, Lat: 40.7022, Lng: 29.9887, Deaths: 17127, Injuries: 43953, Displaced: 500000, Vulnerable: 'Apartment Dwellers, Urban Center', HousesDamaged: 120000, Infrastructure: 'Refinery fires, wide scale building pancake collapses', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.6', SeverityScore: 10 },
  { Date: '2003-08-01', Year: 2003, 'Event Type': 'Heatwave', Location: 'Western Europe', Cost: 13000, Lat: 46.2276, Lng: 2.2137, Deaths: 72000, Injuries: 100000, Displaced: 0, Vulnerable: 'Elderly, Isolated Individuals', HousesDamaged: 0, Infrastructure: 'Power grids strained, agricultural failure', DamageSeverity: 'Catastrophic', EnvFactor: 'Temp: Extended >40°C', SeverityScore: 9 },
  { Date: '2003-12-26', Year: 2003, 'Event Type': 'Earthquake', Location: 'Bam, Iran', Cost: 500, Lat: 29.1060, Lng: 58.3570, Deaths: 26271, Injuries: 30000, Displaced: 100000, Vulnerable: 'Mud-brick City Residents', HousesDamaged: 25000, Infrastructure: 'Historic citadel destroyed, city infrastructure leveled', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 6.6', SeverityScore: 10 },
  { Date: '2004-12-26', Year: 2004, 'Event Type': 'Tsunami', Location: 'Sumatra, Indonesia', Cost: 10000, Lat: 3.5952, Lng: 98.6722, Deaths: 227898, Injuries: 500000, Displaced: 1700000, Vulnerable: 'Coastal Communities, Tourists', HousesDamaged: 400000, Infrastructure: 'Entire coastal towns wiped off map, ports erased', DamageSeverity: 'Catastrophic', EnvFactor: 'Wave Height: 30m', SeverityScore: 10 },
  { Date: '2005-08-29', Year: 2005, 'Event Type': 'Cyclone', Location: 'New Orleans, USA (Katrina)', Cost: 125000, Lat: 29.9511, Lng: -90.0715, Deaths: 1836, Injuries: 10000, Displaced: 1000000, Vulnerable: 'Lower Ninth Ward, Elderly', HousesDamaged: 300000, Infrastructure: 'Levee breaches submerged 80% of city', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 280 km/h', SeverityScore: 10 },
  { Date: '2007-11-15', Year: 2007, 'Event Type': 'Cyclone', Location: 'Bangladesh (Sidr)', Cost: 1700, Lat: 22.3569, Lng: 89.3833, Deaths: 3447, Injuries: 55000, Displaced: 3000000, Vulnerable: 'Sundarbans Villagers', HousesDamaged: 1500000, Infrastructure: 'Total grid wipeout, massive mangrove damage', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 260 km/h', SeverityScore: 9 },
  { Date: '2008-05-02', Year: 2008, 'Event Type': 'Cyclone', Location: 'Myanmar (Nargis)', Cost: 10000, Lat: 16.0000, Lng: 95.0000, Deaths: 138366, Injuries: 80000, Displaced: 2500000, Vulnerable: 'Irrawaddy Delta Farmers', HousesDamaged: 450000, Infrastructure: 'Delta flooded, 95% of buildings in area destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 215 km/h', SeverityScore: 10 },
  { Date: '2008-05-12', Year: 2008, 'Event Type': 'Earthquake', Location: 'Sichuan, China', Cost: 150000, Lat: 31.0000, Lng: 103.4000, Deaths: 87587, Injuries: 374643, Displaced: 4800000, Vulnerable: 'Mountain Towns, Schools', HousesDamaged: 5400000, Infrastructure: 'Widespread landslides buried towns, dam risks', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.9', SeverityScore: 10 },
  { Date: '2009-08-08', Year: 2009, 'Event Type': 'Cyclone', Location: 'Taiwan (Morakot)', Cost: 3300, Lat: 23.6978, Lng: 120.9605, Deaths: 673, Injuries: 1000, Displaced: 50000, Vulnerable: 'Mountain Indigenous Villages', HousesDamaged: 10000, Infrastructure: 'Record landslides buried entire villages', DamageSeverity: 'High', EnvFactor: 'Rainfall: 2777mm', SeverityScore: 9 },
  { Date: '2010-01-12', Year: 2010, 'Event Type': 'Earthquake', Location: 'Port-au-Prince, Haiti', Cost: 8500, Lat: 18.5392, Lng: -72.3364, Deaths: 220000, Injuries: 300000, Displaced: 1500000, Vulnerable: 'Urban Poor, Unreinforced Masonry', HousesDamaged: 250000, Infrastructure: 'Presidential palace collapsed, hospitals destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.0', SeverityScore: 10 },
  { Date: '2010-02-27', Year: 2010, 'Event Type': 'Earthquake', Location: 'Bio Bio, Chile', Cost: 30000, Lat: -35.9090, Lng: -72.7330, Deaths: 525, Injuries: 12000, Displaced: 800000, Vulnerable: 'Coastal Cities, Transport Workers', HousesDamaged: 370000, Infrastructure: 'Tsunami wiped out ports, bridges snapped', DamageSeverity: 'High', EnvFactor: 'Magnitude: 8.8', SeverityScore: 8 },
  { Date: '2010-07-20', Year: 2010, 'Event Type': 'Heatwave', Location: 'Western Russia', Cost: 15000, Lat: 55.7558, Lng: 37.6173, Deaths: 55000, Injuries: 100000, Displaced: 0, Vulnerable: 'Elderly, Respiratory Patients', HousesDamaged: 0, Infrastructure: 'Wildfires destroyed crops, massive smog', DamageSeverity: 'Catastrophic', EnvFactor: 'Temp: Long Duration', SeverityScore: 9 },
  { Date: '2011-01-11', Year: 2011, 'Event Type': 'Flood', Location: 'Rio de Janeiro, Brazil', Cost: 1200, Lat: -22.9068, Lng: -43.1729, Deaths: 903, Injuries: 3000, Displaced: 35000, Vulnerable: 'Favela Residents, Hillsides', HousesDamaged: 10000, Infrastructure: 'Mudslides erased hillside neighborhoods', DamageSeverity: 'High', EnvFactor: 'Rainfall: Extreme', SeverityScore: 8 },
  { Date: '2011-03-11', Year: 2011, 'Event Type': 'Tsunami', Location: 'Tohoku, Japan', Cost: 360000, Lat: 38.2682, Lng: 140.8694, Deaths: 19759, Injuries: 6157, Displaced: 470000, Vulnerable: 'Coastal Communities, Nuclear Plant', HousesDamaged: 1200000, Infrastructure: 'Fukushima meltdown, absolute coastal decimation', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 9.1', SeverityScore: 10 },
  { Date: '2011-07-25', Year: 2011, 'Event Type': 'Flood', Location: 'Thailand', Cost: 46500, Lat: 13.7563, Lng: 100.5018, Deaths: 815, Injuries: 2000, Displaced: 2500000, Vulnerable: 'Factory Workers, Urban Centers', HousesDamaged: 400000, Infrastructure: 'Global supply chain disrupted, massive industrial park floods', DamageSeverity: 'Catastrophic', EnvFactor: 'River Overflow', SeverityScore: 9 },
  { Date: '2011-07-01', Year: 2011, 'Event Type': 'Heatwave', Location: 'East Africa (Drought)', Cost: 5000, Lat: 3.0000, Lng: 38.0000, Deaths: 250000, Injuries: 0, Displaced: 920000, Vulnerable: 'Nomads, Farmers', HousesDamaged: 0, Infrastructure: 'Total agricultural collapse, water sources dried', DamageSeverity: 'Catastrophic', EnvFactor: 'Drought: Extreme', SeverityScore: 10 },
  { Date: '2012-06-01', Year: 2012, 'Event Type': 'Heatwave', Location: 'Central USA (Drought)', Cost: 30000, Lat: 40.0000, Lng: -100.0000, Deaths: 123, Injuries: 0, Displaced: 0, Vulnerable: 'Farmers, Agribusiness', HousesDamaged: 0, Infrastructure: 'Crop failure, river transport halted due to low water', DamageSeverity: 'High', EnvFactor: 'Drought', SeverityScore: 7 },
  { Date: '2012-10-22', Year: 2012, 'Event Type': 'Cyclone', Location: 'New York/NJ, USA (Sandy)', Cost: 68700, Lat: 40.7128, Lng: -74.0060, Deaths: 233, Injuries: 1000, Displaced: 100000, Vulnerable: 'Coastal Suburbs, Subway Systems', HousesDamaged: 346000, Infrastructure: 'Subways flooded, prolonged massive blackouts', DamageSeverity: 'Catastrophic', EnvFactor: 'Storm Surge: 4m', SeverityScore: 9 },
  { Date: '2012-12-03', Year: 2012, 'Event Type': 'Cyclone', Location: 'Mindanao, Philippines (Bopha)', Cost: 1160, Lat: 7.1907, Lng: 125.4553, Deaths: 1901, Injuries: 2600, Displaced: 200000, Vulnerable: 'Rural Farmers, Coastal', HousesDamaged: 150000, Infrastructure: 'Plantations destroyed, valley floods', DamageSeverity: 'High', EnvFactor: 'Wind: 280 km/h', SeverityScore: 8 },
  { Date: '2013-11-08', Year: 2013, 'Event Type': 'Cyclone', Location: 'Leyte, Philippines (Haiyan)', Cost: 5800, Lat: 11.2430, Lng: 125.0081, Deaths: 6300, Injuries: 28600, Displaced: 4100000, Vulnerable: 'Coastal Poor, Urban Tacloban', HousesDamaged: 1100000, Infrastructure: 'Storm surge leveled Tacloban, airports destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 315 km/h', SeverityScore: 10 },
  { Date: '2015-04-25', Year: 2015, 'Event Type': 'Earthquake', Location: 'Gorkha, Nepal', Cost: 10000, Lat: 28.1473, Lng: 84.7082, Deaths: 8964, Injuries: 21952, Displaced: 2800000, Vulnerable: 'Mountain Villages, Heritage Sites', HousesDamaged: 600000, Infrastructure: 'Kathmandu heritage destroyed, mountain roads blocked', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.8', SeverityScore: 9 },
  { Date: '2016-10-04', Year: 2016, 'Event Type': 'Cyclone', Location: 'Haiti (Matthew)', Cost: 2800, Lat: 18.5392, Lng: -72.3364, Deaths: 1000, Injuries: 3000, Displaced: 175000, Vulnerable: 'Rural Farmers, Coastal', HousesDamaged: 200000, Infrastructure: 'Cholera surge, bridges washed away', DamageSeverity: 'High', EnvFactor: 'Wind: 260 km/h', SeverityScore: 8 },
  { Date: '2017-03-15', Year: 2017, 'Event Type': 'Flood', Location: 'Piura, Peru', Cost: 3100, Lat: -5.1963, Lng: -80.6302, Deaths: 162, Injuries: 500, Displaced: 200000, Vulnerable: 'Desert Dwellers, River Communities', HousesDamaged: 100000, Infrastructure: 'El Niño driven mudslides wiped out bridges', DamageSeverity: 'High', EnvFactor: 'Rainfall: Extreme', SeverityScore: 7 },
  { Date: '2017-08-25', Year: 2017, 'Event Type': 'Cyclone', Location: 'Texas, USA (Harvey)', Cost: 125000, Lat: 29.7604, Lng: -95.3698, Deaths: 107, Injuries: 5000, Displaced: 30000, Vulnerable: 'Urban Houston, Refinery Workers', HousesDamaged: 300000, Infrastructure: 'Record urban flooding, chemical spills', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: 1539mm', SeverityScore: 10 },
  { Date: '2017-09-06', Year: 2017, 'Event Type': 'Cyclone', Location: 'Caribbean (Irma)', Cost: 77160, Lat: 18.0000, Lng: -63.0000, Deaths: 134, Injuries: 2000, Displaced: 1200000, Vulnerable: 'Island Nations', HousesDamaged: 200000, Infrastructure: 'Barbuda 95% structures destroyed, keys wiped out', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 285 km/h', SeverityScore: 9 },
  { Date: '2017-09-20', Year: 2017, 'Event Type': 'Cyclone', Location: 'Puerto Rico (Maria)', Cost: 91610, Lat: 18.2208, Lng: -66.5901, Deaths: 2975, Injuries: 5000, Displaced: 130000, Vulnerable: 'Mountain Residents, Elderly', HousesDamaged: 300000, Infrastructure: 'Island-wide blackout lasting months, cellular networks down', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 280 km/h', SeverityScore: 10 },
  { Date: '2018-09-04', Year: 2018, 'Event Type': 'Cyclone', Location: 'Kansai, Japan (Jebi)', Cost: 12600, Lat: 34.6937, Lng: 135.5023, Deaths: 14, Injuries: 600, Displaced: 5000, Vulnerable: 'Urban Areas', HousesDamaged: 50000, Infrastructure: 'Airport submerged, tanker crashed into bridge', DamageSeverity: 'High', EnvFactor: 'Wind: 195 km/h', SeverityScore: 7 },
  { Date: '2018-11-08', Year: 2018, 'Event Type': 'Landslide', Location: 'Paradise, USA (Camp Fire)', Cost: 16500, Lat: 39.7596, Lng: -121.5994, Deaths: 85, Injuries: 200, Displaced: 52000, Vulnerable: 'Forest Communities, Elderly', HousesDamaged: 18804, Infrastructure: 'Entire town incinerated, grid ignited fires', DamageSeverity: 'Catastrophic', EnvFactor: 'Wildfire', SeverityScore: 9 },
  { Date: '2019-03-14', Year: 2019, 'Event Type': 'Cyclone', Location: 'Mozambique (Idai)', Cost: 2200, Lat: -19.8436, Lng: 34.8389, Deaths: 1302, Injuries: 3000, Displaced: 400000, Vulnerable: 'Beira Residents, Farmers', HousesDamaged: 150000, Infrastructure: 'Inland ocean created, total loss of Beira port', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 195 km/h', SeverityScore: 9 },
  { Date: '2019-09-01', Year: 2019, 'Event Type': 'Cyclone', Location: 'Bahamas (Dorian)', Cost: 5100, Lat: 26.5586, Lng: -77.0601, Deaths: 74, Injuries: 500, Displaced: 70000, Vulnerable: 'Island Communities', HousesDamaged: 13000, Infrastructure: 'Total decimation of Grand Bahama, stalled storm', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 295 km/h', SeverityScore: 10 },
  { Date: '2019-10-12', Year: 2019, 'Event Type': 'Cyclone', Location: 'Honshu, Japan (Hagibis)', Cost: 15000, Lat: 35.6762, Lng: 139.6503, Deaths: 98, Injuries: 400, Displaced: 100000, Vulnerable: 'River Valley Residents', HousesDamaged: 85000, Infrastructure: 'Shinkansen yard flooded, massive levee failures', DamageSeverity: 'High', EnvFactor: 'Rainfall: Extreme', SeverityScore: 8 },
  { Date: '2019-12-01', Year: 2019, 'Event Type': 'Heatwave', Location: 'Australia (Bushfires)', Cost: 103000, Lat: -33.8688, Lng: 151.2093, Deaths: 33, Injuries: 100, Displaced: 65000, Vulnerable: 'Forest Edge Residents, Wildlife', HousesDamaged: 3500, Infrastructure: 'Unprecedented smoke covered cities, millions of animals dead', DamageSeverity: 'Catastrophic', EnvFactor: 'Wildfire/Smoke', SeverityScore: 9 },
  { Date: '2020-05-20', Year: 2020, 'Event Type': 'Cyclone', Location: 'Bangladesh/India (Amphan)', Cost: 13000, Lat: 22.3569, Lng: 89.3833, Deaths: 128, Injuries: 500, Displaced: 4900000, Vulnerable: 'Delta Farmers, Slums', HousesDamaged: 700000, Infrastructure: 'Mangrove protection breached, massive power loss', DamageSeverity: 'Catastrophic', EnvFactor: 'Wind: 260 km/h', SeverityScore: 9 },
  { Date: '2020-06-01', Year: 2020, 'Event Type': 'Flood', Location: 'Yangtze River, China', Cost: 32000, Lat: 30.5928, Lng: 114.3055, Deaths: 278, Injuries: 2000, Displaced: 3800000, Vulnerable: 'River Basin Communities', HousesDamaged: 250000, Infrastructure: 'Three Gorges Dam at capacity, immense crop wipeout', DamageSeverity: 'Catastrophic', EnvFactor: 'River Overflow', SeverityScore: 9 },
  { Date: '2020-08-16', Year: 2020, 'Event Type': 'Heatwave', Location: 'California, USA (Wildfires)', Cost: 19800, Lat: 36.7783, Lng: -119.4179, Deaths: 33, Injuries: 150, Displaced: 300000, Vulnerable: 'Wildland-Urban Interface', HousesDamaged: 10500, Infrastructure: 'Lightning complexes burned millions of acres', DamageSeverity: 'High', EnvFactor: 'Wildfire', SeverityScore: 8 },
  { Date: '2021-06-25', Year: 2021, 'Event Type': 'Heatwave', Location: 'Western N. America', Cost: 8900, Lat: 49.2827, Lng: -123.1207, Deaths: 1400, Injuries: 3000, Displaced: 0, Vulnerable: 'Unacclimatized Urban Pop', HousesDamaged: 0, Infrastructure: 'Heat domes caused roads to buckle, cables melt', DamageSeverity: 'Catastrophic', EnvFactor: 'Temp: 49.6°C', SeverityScore: 9 },
  { Date: '2021-07-14', Year: 2021, 'Event Type': 'Flood', Location: 'Ahr Valley, Germany', Cost: 40000, Lat: 50.5361, Lng: 7.0425, Deaths: 243, Injuries: 1500, Displaced: 20000, Vulnerable: 'River Valley Towns', HousesDamaged: 50000, Infrastructure: 'Historic medieval towns wiped out, bridges failed entirely', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: Extreme', SeverityScore: 9 },
  { Date: '2021-11-14', Year: 2021, 'Event Type': 'Flood', Location: 'British Columbia, Canada', Cost: 7500, Lat: 49.0504, Lng: -122.3286, Deaths: 5, Injuries: 50, Displaced: 15000, Vulnerable: 'Farmers, Transport Workers', HousesDamaged: 5000, Infrastructure: 'Atmospheric river wiped out main highways and railways', DamageSeverity: 'High', EnvFactor: 'Rainfall: Extreme', SeverityScore: 8 },
  { Date: '2022-04-11', Year: 2022, 'Event Type': 'Flood', Location: 'KwaZulu-Natal, South Africa', Cost: 2000, Lat: -29.8587, Lng: 31.0218, Deaths: 448, Injuries: 4000, Displaced: 40000, Vulnerable: 'Informal Settlements', HousesDamaged: 12000, Infrastructure: 'Durban port operations halted, massive mudslides', DamageSeverity: 'High', EnvFactor: 'Rainfall: 450mm', SeverityScore: 8 },
  { Date: '2022-06-14', Year: 2022, 'Event Type': 'Flood', Location: 'Sindh/Balochistan, Pakistan', Cost: 40000, Lat: 25.8943, Lng: 68.5247, Deaths: 1739, Injuries: 12867, Displaced: 7900000, Vulnerable: 'Rural Farmers', HousesDamaged: 2200000, Infrastructure: '1/3 of country underwater, massive agricultural wipeout', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall/Glacial Melt', SeverityScore: 10 },
  { Date: '2022-09-28', Year: 2022, 'Event Type': 'Cyclone', Location: 'Florida, USA (Ian)', Cost: 112900, Lat: 26.6406, Lng: -81.8723, Deaths: 161, Injuries: 2000, Displaced: 50000, Vulnerable: 'Coastal Seniors, Barrier Islands', HousesDamaged: 200000, Infrastructure: 'Fort Myers beach erased, causeways destroyed', DamageSeverity: 'Catastrophic', EnvFactor: 'Storm Surge: 5m', SeverityScore: 10 },
  { Date: '2023-02-06', Year: 2023, 'Event Type': 'Earthquake', Location: 'Gaziantep, Turkey/Syria', Cost: 118000, Lat: 37.0662, Lng: 37.3833, Deaths: 59259, Injuries: 121704, Displaced: 3000000, Vulnerable: 'Urban Centers, Refugees', HousesDamaged: 345000, Infrastructure: 'Entire city blocks flattened, airport runways split', DamageSeverity: 'Catastrophic', EnvFactor: 'Magnitude: 7.8', SeverityScore: 10 },
  { Date: '2023-08-08', Year: 2023, 'Event Type': 'Landslide', Location: 'Maui, USA (Wildfire)', Cost: 5500, Lat: 20.8783, Lng: -156.6825, Deaths: 100, Injuries: 150, Displaced: 11000, Vulnerable: 'Historic Lahaina Residents', HousesDamaged: 2200, Infrastructure: 'Historic town completely incinerated by hurricane-force winds', DamageSeverity: 'Catastrophic', EnvFactor: 'Wildfire/Wind', SeverityScore: 9 },
  { Date: '2023-09-10', Year: 2023, 'Event Type': 'Flood', Location: 'Derna, Libya', Cost: 2000, Lat: 32.7616, Lng: 22.6364, Deaths: 11300, Injuries: 5000, Displaced: 43000, Vulnerable: 'City Center Residents', HousesDamaged: 5000, Infrastructure: 'Storm Daniel collapsed two dams, washing 1/4 of city into sea', DamageSeverity: 'Catastrophic', EnvFactor: 'Dam Failure', SeverityScore: 10 },
  { Date: '2024-01-01', Year: 2024, 'Event Type': 'Earthquake', Location: 'Noto, Japan', Cost: 5000, Lat: 37.3995, Lng: 136.9038, Deaths: 241, Injuries: 1184, Displaced: 25000, Vulnerable: 'Elderly Peninsula Residents', HousesDamaged: 20000, Infrastructure: 'Widespread fires, massive road ruptures', DamageSeverity: 'High', EnvFactor: 'Magnitude: 7.5', SeverityScore: 8 },
  { Date: '2024-02-02', Year: 2024, 'Event Type': 'Heatwave', Location: 'Valparaíso, Chile (Wildfire)', Cost: 1000, Lat: -33.0456, Lng: -71.6197, Deaths: 131, Injuries: 300, Displaced: 15000, Vulnerable: 'Hillside Settlements', HousesDamaged: 6000, Infrastructure: 'Urban firestorm destroyed transport networks', DamageSeverity: 'High', EnvFactor: 'Wildfire', SeverityScore: 8 },
  { Date: '2024-04-03', Year: 2024, 'Event Type': 'Earthquake', Location: 'Hualien, Taiwan', Cost: 1500, Lat: 23.9769, Lng: 121.6044, Deaths: 18, Injuries: 1145, Displaced: 500, Vulnerable: 'Mountain Tourists', HousesDamaged: 200, Infrastructure: 'Massive highway rockfalls, leaning towers', DamageSeverity: 'Medium', EnvFactor: 'Magnitude: 7.4', SeverityScore: 6 },
  { Date: '2024-05-15', Year: 2024, 'Event Type': 'Flood', Location: 'Rio Grande do Sul, Brazil', Cost: 3500, Lat: -30.0346, Lng: -51.2177, Deaths: 170, Injuries: 800, Displaced: 600000, Vulnerable: 'Urban Basin Residents', HousesDamaged: 80000, Infrastructure: 'Capital city airport flooded for weeks', DamageSeverity: 'Catastrophic', EnvFactor: 'Rainfall: Extreme', SeverityScore: 9 },
  { Date: '2024-06-25', Year: 2024, 'Event Type': 'Flood', Location: 'Nairobi, Kenya', Cost: 800, Lat: -1.2921, Lng: 36.8219, Deaths: 290, Injuries: 500, Displaced: 280000, Vulnerable: 'Informal Slum Dwellers', HousesDamaged: 30000, Infrastructure: 'River overflow destroyed slums and bridges', DamageSeverity: 'High', EnvFactor: 'Rainfall: El Nino', SeverityScore: 8 }
];

let rawData = [];
let filteredData = [];
let barChartInstance = null;
let scatterChartInstance = null;
let humanChartInstance = null;
let severityChartInstance = null;
let mapInstance = null;
let mapLayerGroup = null;

const uploadView = document.getElementById('upload-view');
const dashboardView = document.getElementById('dashboard-view');
const fileInput = document.getElementById('csv-file-input');
const btnHistorical = document.getElementById('btn-load-historical');

// Filter UI
const filterType = document.getElementById('filter-type');
const filterSearch = document.getElementById('filter-search');
const filterStart = document.getElementById('filter-start');
const filterEnd = document.getElementById('filter-end');
const resetFiltersBtn = document.getElementById('reset-filters');
const recordCountEl = document.getElementById('record-count');
const tableBody = document.getElementById('table-body');
const kpiDeaths = document.getElementById('kpi-deaths');
const kpiDisplaced = document.getElementById('kpi-displaced');
const kpiCost = document.getElementById('kpi-cost');
const kpiHouses = document.getElementById('kpi-houses');

// Initializers
btnHistorical.addEventListener('click', () => {
  processRawData(JSON.parse(JSON.stringify(HISTORICAL_DATA)));
  showDashboard();
});

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        processRawData(results.data);
        showDashboard();
      }
    });
  }
});

function showDashboard() {
  uploadView.className = 'hidden';
  dashboardView.className = dashboardView.className.replace('hidden', '');
  setTimeout(initMap, 100); 
}

function initMap() {
  if (mapInstance) return;
  mapInstance = L.map('map').setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(mapInstance);

  mapLayerGroup = L.layerGroup().addTo(mapInstance);
  renderMapMarkers();
}

function processRawData(data) {
  rawData = data.map((row, id) => {
    let costNum = row.Cost;
    if (typeof costNum === 'string') costNum = parseFloat(costNum.replace(/[^0-9.-]+/g, ''));
    
    // Safely parse human factors
    let deaths = parseInt(row.Deaths);
    let injuries = parseInt(row.Injuries);
    let displaced = parseInt(row.Displaced);
    let housesDamaged = parseInt(row.HousesDamaged);
    let severityScore = parseInt(row.SeverityScore);

    const yearNum = parseInt(row.Year) || new Date(row.Date).getFullYear();
    const lat = parseFloat(row.Lat);
    const lng = parseFloat(row.Lng);

    return {
      ...row,
      id,
      Year: isNaN(yearNum) ? null : yearNum,
      Cost: isNaN(costNum) ? 0 : costNum,
      Lat: isNaN(lat) ? null : lat,
      Lng: isNaN(lng) ? null : lng,
      Deaths: isNaN(deaths) ? 0 : deaths,
      Injuries: isNaN(injuries) ? 0 : injuries,
      Displaced: isNaN(displaced) ? 0 : displaced,
      HousesDamaged: isNaN(housesDamaged) ? 0 : housesDamaged,
      SeverityScore: isNaN(severityScore) ? 0 : severityScore,
      Infrastructure: row.Infrastructure || 'Unknown',
      DamageSeverity: row.DamageSeverity || 'Unknown',
      EnvFactor: row.EnvFactor || 'Unknown',
      Vulnerable: row.Vulnerable || 'General Population'
    };
  });

  const types = new Set(rawData.map(r => r['Event Type']).filter(Boolean));
  const sortedTypes = Array.from(types).sort();
  
  filterType.innerHTML = '<option value="All">All Events</option>';
  sortedTypes.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    filterType.appendChild(opt);
  });

  applyFilters();
}

function applyFilters() {
  const fType = filterType.value;
  const fSearch = filterSearch.value.toLowerCase();
  const fStart = parseInt(filterStart.value);
  const fEnd = parseInt(filterEnd.value);

  filteredData = rawData.filter(row => {
    if (fType !== 'All' && row['Event Type'] !== fType) return false;
    
    if (fSearch) {
      if (!row.Location?.toLowerCase().includes(fSearch) && 
          !row['Event Type']?.toLowerCase().includes(fSearch) &&
          (!row.Vulnerable || !row.Vulnerable.toLowerCase().includes(fSearch))) {
        return false;
      }
    }

    if (fStart && row.Year < fStart) return false;
    if (fEnd && row.Year > fEnd) return false;

    return true;
  });

  renderDashboard();
}

[filterType, filterSearch, filterStart, filterEnd].forEach(el => {
  el.addEventListener('input', applyFilters);
});

resetFiltersBtn.addEventListener('click', () => {
  filterType.value = 'All';
  filterSearch.value = '';
  filterStart.value = '';
  filterEnd.value = '';
  applyFilters();
});

function renderDashboard() {
  recordCountEl.textContent = filteredData.length;
  localStorage.setItem('climateTrackerCurrentData', JSON.stringify(filteredData));
  
  // Calculate KPIs
  const sumDeaths = filteredData.reduce((acc, r) => acc + (r.Deaths || 0), 0);
  const sumDisplaced = filteredData.reduce((acc, r) => acc + (r.Displaced || 0), 0);
  const sumCost = filteredData.reduce((acc, r) => acc + (r.Cost || 0), 0);
  const sumHouses = filteredData.reduce((acc, r) => acc + (r.HousesDamaged || 0), 0);
  
  kpiDeaths.textContent = sumDeaths.toLocaleString();
  kpiDisplaced.textContent = sumDisplaced.toLocaleString();
  kpiCost.textContent = '$' + sumCost.toLocaleString() + 'M';
  if(kpiHouses) kpiHouses.textContent = sumHouses.toLocaleString();

  renderTable();
  renderBarChart();
  renderScatterChart();
  renderHumanChart();
  renderSeverityChart();
  
  if (mapInstance) {
    renderMapMarkers();
  }
}

function renderMapMarkers() {
  mapLayerGroup.clearLayers();
  let bounds = [];

  filteredData.forEach(row => {
    if (row.Lat !== null && row.Lng !== null) {
      let fColor = "#94a3b8"; 
      let bColor = "#ffffff"; // White border for high-contrast point dots
      const type = row['Event Type'];
      
      if (type === 'Flood') { fColor = "#3b82f6"; }
      else if (type === 'Cyclone') { fColor = "#f97316"; }
      else if (type === 'Earthquake') { fColor = "#eab308"; }
      else if (type === 'Landslide') { fColor = "#84cc16"; }
      else if (type === 'Tsunami') { fColor = "#06b6d4"; }
      else if (type === 'Heatwave') { fColor = "#ef4444"; }

      // Calculate geographic radius based on severity and displacement
      // Baseline 10,000 meters (10km), scale up based on displacement and severity
      const baseRadius = 20000;
      const severityMultiplier = row.SeverityScore || 5;
      const displacementBonus = Math.min((row.Displaced || 0) / 1000, 150) * 500; // max 75km bonus
      const calcRadius = baseRadius + (severityMultiplier * 10000) + displacementBonus;

      // Geographic circles that represent affected area visually
      const marker = L.circle([row.Lat, row.Lng], {
        radius: calcRadius,
        fillColor: fColor,
        color: fColor,
        weight: 1,
        opacity: 0.1,
        fillOpacity: 0.25,
        className: 'mix-blend-multiply'
      });
      
      // Badge Color Helper
      let badgeColor = 'bg-slate-100 text-slate-700';
      if (row.DamageSeverity === 'High' || row.DamageSeverity === 'Catastrophic') badgeColor = 'bg-red-100 text-red-700 border-red-200';
      else if (row.DamageSeverity === 'Medium') badgeColor = 'bg-yellow-100 text-yellow-700 border-yellow-200';
      else if (row.DamageSeverity === 'Low') badgeColor = 'bg-green-100 text-green-700 border-green-200';

      const popupText = `
        <div class="font-sans text-sm p-2 w-[240px]">
          <div class="flex justify-between items-start">
            <strong class="text-base text-slate-800 flex items-center gap-1 leading-tight">
                ☔ ${row['Event Type']} (${row.Year})
            </strong>
            <span class="text-[10px] px-1.5 py-0.5 rounded border ${badgeColor} font-bold">${row.DamageSeverity}</span>
          </div>
          <span class="text-slate-600 block mt-1 text-xs">${row.Location}</span>
          
          <div class="mt-2 p-2 bg-slate-50 border border-slate-100 rounded text-xs space-y-1">
             <div class="font-bold text-red-600 flex justify-between"><span>Deaths:</span> <span class="font-medium text-slate-700">${row.Deaths.toLocaleString()}</span></div>
             <div class="font-bold text-orange-600 flex justify-between"><span>Houses:</span> <span class="font-medium text-slate-700">${row.HousesDamaged.toLocaleString()}</span></div>
             <div class="font-bold text-blue-600 flex justify-between"><span>Cost:</span> <span class="font-medium text-slate-700">$${row.Cost.toLocaleString()}M</span></div>
          </div>

          <div class="mt-2 text-xs">
             <div class="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Environment</div>
             <p class="text-slate-600 leading-snug">${row.EnvFactor}</p>
          </div>
          
          <div class="mt-2 text-xs">
             <div class="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Infrastructure</div>
             <p class="text-slate-600 leading-snug line-clamp-2" title="${row.Infrastructure}">${row.Infrastructure}</p>
          </div>
        </div>
      `;

      marker.bindPopup(popupText);
      marker.on('click', () => {
        mapInstance.flyTo([row.Lat, row.Lng], 7, { animate: true, duration: 1.5 });
      });
      mapLayerGroup.addLayer(marker);
      bounds.push([row.Lat, row.Lng]);
    }
  });

  if (bounds.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 6 });
  } else {
    mapInstance.setView([20, 0], 2);
  }
}

function renderTable() {
  tableBody.innerHTML = '';
  const rows = filteredData.slice(0, 100).map(row => {
    let badgeColor = 'bg-slate-100 text-slate-700 border-slate-200';
    if (row.DamageSeverity === 'High' || row.DamageSeverity === 'Catastrophic') badgeColor = 'bg-red-50 text-red-700 border-red-200';
    else if (row.DamageSeverity === 'Medium') badgeColor = 'bg-yellow-50 text-yellow-700 border-yellow-200';
    else if (row.DamageSeverity === 'Low') badgeColor = 'bg-green-50 text-green-700 border-green-200';
    
    return `
    <tr class="hover:bg-slate-50/50 transition-colors cursor-default border-b border-slate-50 last:border-none">
      <td class="px-6 py-4 whitespace-nowrap text-slate-600 font-medium">${row.Date || row.Year || '-'}</td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 uppercase tracking-wider border border-blue-100 shadow-sm">${row['Event Type'] || '-'}</span>
      </td>
      <td class="px-6 py-4 text-slate-800 font-medium">${row.Location || '-'}</td>
      <td class="px-6 py-4 text-slate-500 text-xs leading-relaxed">
         <div class="font-bold text-slate-700 mb-0.5">Houses: ${row.HousesDamaged.toLocaleString()}</div>
         <div class="truncate max-w-[200px]" title="${row.Infrastructure}">${row.Infrastructure}</div>
      </td>
      <td class="px-6 py-4 text-slate-500 text-xs leading-relaxed">
         <div class="mb-1"><span class="px-1.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}">${row.DamageSeverity} (Score: ${row.SeverityScore})</span></div>
         <div class="truncate max-w-[150px]" title="${row.EnvFactor}">${row.EnvFactor}</div>
      </td>
      <td class="px-6 py-4 text-xs font-medium text-slate-600 whitespace-nowrap">
         <span class="text-slate-800 font-bold">${row.Deaths.toLocaleString()}</span> D / 
         <span class="text-slate-800 font-bold">${row.Injuries.toLocaleString()}</span> I / 
         <span class="text-rose-600 font-bold">${(row.Displaced/1000).toFixed(0)}k</span> Disp
      </td>
    </tr>
  `}).join('');
  tableBody.innerHTML = rows || '<tr><td colspan="5" class="text-center py-8 text-slate-500 italic">No geographic data matches your parameters.</td></tr>';
}

function renderBarChart() {
  const typeMap = {};
  filteredData.forEach(row => {
    const type = row['Event Type'] || 'Unknown';
    typeMap[type] = (typeMap[type] || 0) + row.Cost;
  });

  const chartData = Object.entries(typeMap).sort((a, b) => b[1] - a[1]).map(([type, cost]) => ({ x: type, y: cost }));

  if (barChartInstance) barChartInstance.destroy();
  const ctx = document.getElementById('bar-chart').getContext('2d');
  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.map(d => d.x),
      datasets: [{ label: 'Economic Cost (Millions)', data: chartData.map(d => d.y), backgroundColor: '#3b82f6', borderRadius: 4 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false } }, y: { border: { display: false }, ticks: { callback: val => `$${val.toLocaleString()}M` } } }
    }
  });
}

function renderScatterChart() {
  const aggregatedByYear = {};
  filteredData.forEach(row => {
    if (row.Year) aggregatedByYear[row.Year] = (aggregatedByYear[row.Year] || 0) + row.Cost;
  });

  const points = Object.entries(aggregatedByYear).map(([year, cost]) => ({ x: parseInt(year), y: cost })).sort((a, b) => a.x - b.x);

  if (scatterChartInstance) scatterChartInstance.destroy();
  const ctx = document.getElementById('scatter-chart').getContext('2d');
  scatterChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Trend Timeline (Cost)', data: points,
        backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: '#f97316', borderWidth: 2, fill: true,
        pointBackgroundColor: '#ef4444', pointRadius: 4, pointHoverRadius: 6, tension: 0.3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, type: 'linear', ticks: { callback: val => parseInt(val) } },
        y: { border: { display: false }, ticks: { callback: val => `$${val.toLocaleString()}M` } }
      }
    }
  });
}

function renderHumanChart() {
  const aggregatedByYear = {};
  filteredData.forEach(row => {
    if (row.Year) {
      aggregatedByYear[row.Year] = aggregatedByYear[row.Year] || { displaced: 0, deaths: 0 };
      aggregatedByYear[row.Year].displaced += row.Displaced;
      aggregatedByYear[row.Year].deaths += row.Deaths;
    }
  });

  const years = Object.keys(aggregatedByYear).map(Number).sort((a,b) => a - b);
  const displacedData = years.map(y => aggregatedByYear[y].displaced);
  
  if (humanChartInstance) humanChartInstance.destroy();
  const ctx = document.getElementById('human-chart').getContext('2d');
  humanChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Displaced Population', data: displacedData,
          backgroundColor: 'rgba(168, 85, 247, 0.15)', borderColor: '#a855f7', borderWidth: 2, fill: true,
          pointBackgroundColor: '#d946ef', pointRadius: 5, pointHoverRadius: 7, tension: 0.4
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { callback: val => years[val] } },
        y: { border: { display: false }, ticks: { callback: val => `${(val/1000).toLocaleString()}k` } }
      }
    }
  });
}

function renderSeverityChart() {
  const points = filteredData.map(row => ({
    x: row.SeverityScore || 0,
    y: row.Cost || 0,
    r: Math.max(4, Math.min(20, (row.Displaced || 0) / 100000)), // Bubble size by displacement
    label: row['Event Type']
  }));

  if (severityChartInstance) severityChartInstance.destroy();
  const ctx = document.getElementById('severity-chart');
  if(!ctx) return;
  
  severityChartInstance = new Chart(ctx.getContext('2d'), {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Disaster Events',
        data: points,
        backgroundColor: 'rgba(20, 184, 166, 0.5)',
        borderColor: '#0d9488',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: {
        x: { 
          grid: { display: false },
          title: { display: true, text: 'Severity Score (1-10)', font: { size: 10 } },
          min: 0, max: 11
        },
        y: { 
          border: { display: false },
          title: { display: true, text: 'Economic Cost (Millions)', font: { size: 10 } },
          ticks: { callback: val => `$${val.toLocaleString()}M` } 
        }
      }
    }
  });
}
