const { observable, autorun, runInAction } = require('mobx');

const state = observable({
  compExercise: 'soccer',
  compRoutine: 10,
  compSchedule: '2021-02-08'
});

// observable 감지하고 있다가 바뀔때마다 콜백 실행
// 연달아 바뀌어도 한번만 실행
autorun(() => {
  console.log('changed', state.compRoutine);
})

state.compExercise = 'baseball'; // 액션이 된다.

// 명시적으로 하나의 액션으로 묵는다.
runInAction(() => {
  state.compRoutine = '20';
  state.compSchedule = '2021-02-09';
});


runInAction(() => {
  state.compRoutine = '30';
});


