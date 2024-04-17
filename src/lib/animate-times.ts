/**
 * Calculates the eased progress value for an animation, creating a deceleration effect towards the end.
 * Allows for adjustment of the easing curve by specifying a custom factor.
 * 
 * @param progress - The current progress of the animation as a value between 0 and 1, where 0 is the start and 1 is the end of the animation.
 * @param factor - The factor to adjust the easing curve, with a default value of 2. Higher values result in more pronounced deceleration towards the end.
 * 
 * @returns The eased progress value, adjusted to slow down as it approaches 1 according to the specified factor.
 */
export const easeOut = (progress: number, factor: number = 2): number => {
  return progress * (factor - progress)
}
