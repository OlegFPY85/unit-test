export default function healthIndicator(character) {
  if (!character || typeof character.health !== 'number') {
    throw new Error('Invalid character object');
  }

  if (character.health > 50) return 'healthy';
  if (character.health >= 15) return 'wounded';
  return 'critical';
}