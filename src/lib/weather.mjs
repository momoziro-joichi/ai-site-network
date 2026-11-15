export function dryAdiabaticTemperature(surfaceC,heightM){return surfaceC-0.0098*heightM}
export function approximateCloudBase(tempC,dewpointC){return Math.max(0,125*(tempC-dewpointC))}
export function dewPoint(tempC,rh){if(!Number.isFinite(tempC)||!Number.isFinite(rh)||rh<=0||rh>100)throw Error('invalid humidity');const a=17.625,b=243.04;const g=Math.log(rh/100)+a*tempC/(b+tempC);return b*g/(a-g)}
export function parcelProfile(tempC,rh,maxHeightM=5000,stepM=100){const td=dewPoint(tempC,rh),lcl=approximateCloudBase(tempC,td);const points=[];for(let h=0;h<=maxHeightM;h+=stepM){const dry=Math.min(h,lcl);const moist=Math.max(0,h-lcl);points.push({heightM:h,tempC:tempC-0.0098*dry-0.006*moist})}return {lclM:lcl,points}}
