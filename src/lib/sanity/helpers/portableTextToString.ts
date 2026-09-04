export function portableTextToString(blocks: unknown): string {
  if (Array.isArray(blocks)) {
    return blocks
      .map((block) => {
        if (typeof block === 'string') return block;
        if (block && typeof block === 'object' && block.children) {
          return block.children.map((child: unknown) => (child as { text: string }).text).join('');
        }
        return '';
      })
      .join(' ')
      .trim();
  }
  return typeof blocks === 'string' ? blocks : '';
}