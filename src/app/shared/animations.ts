import {
  animate,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  style,
  transition, trigger,
  useAnimation
} from '@angular/animations';

export const FADE_IN_ANIMATION: AnimationReferenceMetadata = animation(
  [style({ opacity: 0 }), animate('{{timing}}', style({ opacity: '*' }))],
  { params: { timing: '.125s .250s' } }
);

export const FADE_IN_TOOLBAR: AnimationTriggerMetadata = trigger('fadeInToolbar', [
  transition(
    ':enter',
    [useAnimation(FADE_IN_ANIMATION, {params: {timing: '{{ timing }}'}})],
    {
      params: {
        timing: '.5s'
      }
    }
  )
]);

export const FADE_IN_CONTENT: AnimationTriggerMetadata = trigger('fadeInContent', [
  transition(
    ':enter',
    [useAnimation(FADE_IN_ANIMATION, {params: {timing: '{{ timing }}'}})],
    {
      params: {
        timing: '.5s .5s'
      }
    }
  )
]);
