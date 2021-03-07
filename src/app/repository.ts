export interface Repository<T> {
  findOne: (condition: Partial<T>) => Promise<T>;
}
