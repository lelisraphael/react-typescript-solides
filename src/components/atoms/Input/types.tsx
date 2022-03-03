export type InputProps = {
    type: string
    className: string
    value: string
    inputref?: any
    onChange?(): void
    onClick?(): void
    onKeyPress?(): void
}