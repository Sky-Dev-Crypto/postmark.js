export default interface Bounce {
    RecordType: string
    ID: number
    Type: string
    TypeCode: number
    Name: string
    Tag?: string
    MessageID: string
    ServerID: string
    Description: string
    Details: string
    Email: string
    From: string
    BouncedAt:  string
    DumpAvailable: boolean
    Inactive: boolean
    CanActivate: boolean
    Subject: string
    Content?: string
}