import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const symbol = Symbol('untilDestroyed');

export function untilDestroyed(
  instance: object,
  destroyMethodName = 'ngOnDestroy'
) {
  return <T>(source: Observable<T>) => {
    const originalDestroyFunction = instance[destroyMethodName];

    if (typeof originalDestroyFunction !== 'function') {
      throw new Error(
        `${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`
      );
    }

    if (!instance[symbol]) {
      instance[symbol] = new Subject();

      instance[destroyMethodName] = function() {
        originalDestroyFunction.apply(this, arguments);
        instance[symbol].next();
        instance[symbol].complete();
      };
    }

    return source.pipe(takeUntil<T>(instance[symbol]));
  };
}
