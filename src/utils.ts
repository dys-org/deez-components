import type { ComponentPublicInstance, Ref } from 'vue';

export function dom<T extends Element | ComponentPublicInstance>(
  ref?: Ref<T | null> | null,
): T | null {
  if (ref == null) return null;
  if (ref.value == null) return null;

  return (ref.value as { $el?: T }).$el ?? ref.value;
}
