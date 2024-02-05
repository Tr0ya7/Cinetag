export default function Banner({ image }) {
    return <div style={{ backgroundImage: `url('/banner-${image}.png')`, height: 327 }} />
}