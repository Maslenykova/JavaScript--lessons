import {makeCounter} from './index';

it('should count independently', () =>{
let result = makeCounter();
let result1 = makeCounter();
expect(result()).toEqual(0);
expect(result1()).toEqual(0);
});