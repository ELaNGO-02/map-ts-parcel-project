import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { mapScriptLoader } from './mapscriptLoader';

mapScriptLoader().then(() => {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  customMap.addMarker(user);
  customMap.addMarker(company);
}).catch(error => {
  console.error("Failed to load map script:", error);
});




