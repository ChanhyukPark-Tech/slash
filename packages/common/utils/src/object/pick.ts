/** @tossdocs-ignore */
import { ArrayUnion, ObjectKeys, objectKeys } from '.';

export function pick<ObjectType extends Record<PropertyKey, unknown>, KeyTypes extends Array<ObjectKeys<ObjectType>>>(
  obj: ObjectType,
  keys: KeyTypes
) {
  return objectKeys(obj)
    .filter((k): k is Exclude<ObjectKeys<ObjectType>, ArrayUnion<KeyTypes>> => keys.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as Pick<ObjectType, ArrayUnion<KeyTypes>>);
}