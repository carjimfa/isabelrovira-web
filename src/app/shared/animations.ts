import {
  animate,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata, query,
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

export const FADE_TRANSITION =
  trigger('fadeTransition', [

    transition( '* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.2s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.2s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);
