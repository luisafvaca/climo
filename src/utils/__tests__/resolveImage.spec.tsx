import { vi, expect, describe, it } from 'vitest';
import resolveImage from '../resolveImage';

describe('resolveImage', () => {
  it('should resolve image for weather code 200', () => {
    expect(resolveImage(200)).toBe('2xx.png');
  })

  it('should resolve image for weather code 300', () => {
    expect(resolveImage(300)).toBe('3xx.png');
  })

  it('should resolve image for weather code 500', () => {
    expect(resolveImage(500)).toBe('5xx.png');
  })

  it('should resolve image for weather code 600', () => {
    expect(resolveImage(600)).toBe('6xx.png');
  })

  it('should resolve image for weather code 700', () => {
    expect(resolveImage(700)).toBe('7xx.png');
  })

  it('should resolve image for weather code 800', () => {
    expect(resolveImage(800)).toBe('80x.png');
  })

  it('should resolve image for weather code 801', () => {
    expect(resolveImage(801)).toBe('80x.png');
  })

  it('should resolve image for weather code 803', () => {
    expect(resolveImage(803)).toBe('803.png');
  })

  it('should resolve image for weather code 804', () => {
    expect(resolveImage(804)).toBe('804.png');
  })

  it('should resolve image for weather code 900', () => {
    expect(resolveImage(900)).toBe('90x.png');
  })

  it('should resolve image for weather code 1000', () => {
    expect(resolveImage(1000)).toBe('default.png');
  })
})
