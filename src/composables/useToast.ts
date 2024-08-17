import { ref } from 'vue';

import type { DToastProps } from '@/components/DToast';

export function useToast() {
  const notifications = ref<DToastProps[]>([]);

  function add(notification: Omit<DToastProps, 'id'> & { id?: string }) {
    const body = {
      id: new Date().getTime().toString(),
      ...notification,
    };

    const idExists = notifications.value.find((n: DToastProps) => n.id === body.id);
    if (!idExists) notifications.value.push(body as DToastProps);

    return body;
  }

  function remove(id: string) {
    notifications.value = notifications.value.filter((n: DToastProps) => n.id !== id);
  }

  return { add, remove, notifications };
}
