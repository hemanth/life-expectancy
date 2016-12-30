import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn('in')[0].both, 68.3);
});
