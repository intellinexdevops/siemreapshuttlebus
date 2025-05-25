// import Image from 'next/image';
import {
    Head,
    Html,
    Img,
    Link,
    Text,
    Container,
    Section,
    Body,
    Row,
    Column,
    Hr, Button, Tailwind,
    Preview
} from "@react-email/components";

interface EmailTemplateProps {
    name?: string;
    total?: string;
    issuedDate?: string;
    ticketType?: string;
    price?: string;
    passager?: number;
    phone?: string;
    email?: string;
    orderRef?: string;
    detailUrl?: string;
}

const colorPrimary = "#1C6AE4";

// const imageUrl = "http://localhost:3000"
const imageUrl = "https://siemreapshuttlebus.netlify.app"

export default function EmailTemplate({
    name,
    total,
    issuedDate,
    ticketType,
    price,
    passager,
    phone,
    email,
    orderRef,
    detailUrl,
}: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>Siem Reap Shuttle Booking Confirmation!</Preview>
                <Tailwind>
                    <Body className="font-sans bg-white">
                        <Container style={container}>
                                <Section style={header}>
                                    <Row width={60} align='left'>
                                        <Column width={60}>
                                            <Img
                                                src={`${imageUrl}/bus_icon.png`}
                                                alt='Logo'
                                                width="50"
                                                height="50"
                                                loading="lazy"
                                            />
                                        </Column>
                                    </Row>
                                    <Section>
                                        <Text style={{ fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#ffffff" }}>Siem Reap Shuttle Bus</Text>
                                        <Text style={{ fontSize: 18, color: "white", fontWeight: "600", lineHeight: 1 }} >Confirm!</Text>
                                    </Section>
                                    <Section>
                                        <Text className="text-white font-semibold text-lg leading-none mb-1">Hello {name},</Text>
                                        <Text className="text-white leading-none mt-1.5">Your booking is successfully complete!</Text>
                                    </Section>

                                    <Section>
                                        <Text className="font-medium text-sm leading-none text-white mb-1">Order Ref:</Text>
                                        <Text className="font-semibold text-white leading-none text-xl mt-1.5">{orderRef}</Text>
                                    </Section>
                                </Section>

                            <Section style={{ padding: 16, }} >
                                <Row>
                                    <Column colSpan={2}>
                                        <Text className="text-base text-neutral-500 font-normal leading-none">TOTAL</Text>
                                        <Text className="text-lg text-[#1C6AE4] leading-none font-semibold mt-1">${parseFloat(total!).toFixed(2)}</Text>
                                    </Column>
                                    <Column>
                                        <Text className="text-base text-neutral-500 font-normal leading-none">Issued Date</Text>
                                        <Text className="text-lg text-neutral-600 font-medium leading-none mt-1">{issuedDate}</Text>
                                    </Column>
                                </Row>
                            </Section>

                            <Hr />

                            <Section style={{ padding: 14 }}>
                                <Text className="text-xl leading-none font-semibold text-neutral-700 mt-0">Your Booking</Text>
                                <Section>
                                    <Row align='left'>
                                        <Column width={50} align='left'>
                                            <Button
                                                className="bg-[#1C6AE410] px-2 py-2 rounded-md">
                                                <Img
                                                    src={`${imageUrl}/ticket.png`}
                                                    width="28"
                                                    height="28"
                                                    alt="Ticket"
                                                />
                                            </Button>
                                        </Column>
                                        <Column colSpan={2}>
                                            <Section style={{ marginLeft: 12 }}>
                                                <Text className="text-base text-neutral-600 font-medium leading-none mb-0 mt-0">{ticketType}</Text>
                                                <Link href={`${process.env.NEXT_PUBLIC_BOOKING_DETAIL_URL}/${detailUrl}`} className="text-xs font-normal leading-none underline mt-1.5" >
                                                    Detail
                                                </Link>
                                            </Section>
                                        </Column>
                                        <Column align='right'>
                                            <Row>
                                                <Column align='right'>
                                                    <Text className="text-neutral-500 leading-none font-medium text-base">{passager}</Text>
                                                </Column>
                                                <Column align='right'>
                                                    <Text className="text-neutral-500 leading-none font-medium text-base">&times;</Text>
                                                </Column>
                                                <Column align='right'>
                                                    <Text className="text-neutral-500 leading-none font-medium text-base">${parseFloat(price!).toFixed(2)}</Text>
                                                </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Section>
                            </Section>

                            <Hr />


                            <Section style={{ padding: 14 }}>
                                <Row>
                                    <Column>
                                        <Text className="text-neutral-400 leading-none text-base mb-0 mt-0">Subtitle:</Text>
                                    </Column>
                                    <Column align='right'>
                                        <Text className="text-base text-neutral-600 leading-none mb-0 mt-0">${parseFloat(total!).toFixed(2)}</Text>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <Section>
                                            <Row>
                                                <Column width={50}>
                                                    <Text className="text-base font-medium mb-0 leading-none text-neutral-600 mt-1.5">Total: </Text>
                                                </Column>
                                                <Column>
                                                    <Text className="text-sm text-neutral-400 leading-none mt-1.5 mb-0">(Including VAT)</Text>
                                                </Column>
                                            </Row>
                                        </Section>
                                    </Column>
                                    <Column align='right'>
                                        <Text className="text-base text-neutral-800 mb-0 font-semibold mt-1.5">${parseFloat(total!).toFixed(2)}</Text>
                                    </Column>
                                </Row>
                            </Section>

                            <Hr />

                            <Section style={{ padding: 14 }}>
                                <Text className="text-xl leading-none font-semibold text-neutral-700 mt-0">Customer Information</Text>

                                <Section style={{ marginTop: 24 }}>
                                        <Row align='left'>
                                            <Column align='left'>
                                                <Section align='left'>
                                                    <Row>
                                                        <Column align='left' width={40}>
                                                            <Container className="bg-[#1C6AE410] rounded-full px-3 py-3" width={40} align="left">
                                                                <Img
                                                                    src={`${imageUrl}/user.png`}
                                                                    width="16"
                                                                    height="16"
                                                                    alt='Username'
                                                                />
                                                            </Container>
                                                        </Column>
                                                        <Column align="left">
                                                            <Text className="text-xs text-left leading-none my-0 text-neutral-400 ml-2.5">Name</Text>
                                                            <Text className="text-sm text-left text-neutral-600 mb-0 mt-0.5 ml-2.5 line-clamp-1 flex-1">{name}</Text>
                                                        </Column>
                                                    </Row>
                                                </Section>
                                            </Column>
                                            <Column>
                                                <Section>
                                                    <Row>
                                                        <Column align='left' width={40}>
                                                            <Container className="bg-[#1C6AE410] rounded-full px-3 py-3">
                                                                <Img
                                                                    src={`${imageUrl}/phone.png`}
                                                                    width="16"
                                                                    height="16"
                                                                    alt='Phone'
                                                                />
                                                            </Container>
                                                        </Column>
                                                        <Column>
                                                            <Text className="text-xs leading-none my-0 text-neutral-400 ml-2.5">Phone Number</Text>
                                                            <Link href={`tel:${phone}`} className="text-sm leading-none mb-0 mt-0.5 ml-2.5 underline">{phone}</Link>
                                                        </Column>
                                                    </Row>
                                                </Section>
                                            </Column>
                                        </Row>

                                        <Row style={{paddingTop: 16}}>
                                            <Column align='left'>
                                                <Section align='left'>
                                                    <Row align='left'>
                                                        <Column align='left' width={40}>
                                                            <Container className="bg-[#1C6AE410] rounded-full px-3 py-3" >
                                                                <Img
                                                                    src={`${imageUrl}/email.png`}
                                                                    width={16}
                                                                    height={16}
                                                                    alt='email'
                                                                />
                                                            </Container>
                                                        </Column>
                                                        <Column>
                                                            <Text className="text-xs leading-none my-0 text-neutral-400 ml-2.5">Email</Text>
                                                            <Link href={`mailto:${email}`} className="text-sm leading-none mb-0 mt-0.5 ml-2.5 underline">{email}</Link>
                                                        </Column>
                                                    </Row>
                                                </Section>
                                            </Column>
                                        </Row>
                                    </Section>
                            </Section>

                            <Hr />

                            <Section style={{ padding: 14 }}>
                                <Text className="text-xl leading-none font-semibold text-neutral-700 mt-0">Support</Text>
                                <Section style={{ marginTop: 24 }} >
                                        <Row align='left'>
                                            <Column align='left'>
                                                <Section align='left'>
                                                    <Row align='left'>
                                                        <Column align='left' width={40}>
                                                            <Container className="bg-[#1C6AE410] rounded-full px-3 py-3">
                                                                <Img
                                                                    src={`${imageUrl}/email.png`}
                                                                    width={16}
                                                                    height={16}
                                                                    alt='Our Email'
                                                                />
                                                            </Container>
                                                        </Column>
                                                        <Column>
                                                            <Text className="text-xs leading-none my-0 text-neutral-400 ml-2.5">Phone</Text>
                                                            <Text className="text-sm leading-none text-neutral-700 mb-0 mt-1 ml-2.5">066 810 555 / 085 86 14 24</Text>
                                                        </Column>
                                                    </Row>
                                                </Section>
                                            </Column>
                                        </Row>

                                        <Row style={{paddingTop: 16}}>
                                            <Column>
                                                <Section>
                                                    <Row>
                                                        <Column align='left' width={40}>
                                                            <Container className="bg-[#1C6AE410] rounded-full px-3 py-3">
                                                                <Img
                                                                    src={`${imageUrl}/phone.png`}
                                                                    width={16}
                                                                    height={16}
                                                                    alt='Phone'
                                                                />
                                                            </Container>
                                                        </Column>
                                                        <Column>
                                                            <Text className="text-xs leading-none my-0 text-neutral-400 ml-2.5">Email</Text>
                                                            <Link href={`mailto:contact@sr-airportbus.com`} className="text-sm leading-none underline mb-0 mt-1 ml-2.5">contact@sr-airportbus.com</Link>
                                                        </Column>
                                                    </Row>
                                                </Section>
                                            </Column>
                                        </Row>
                                    </Section>
                                </Section>
                        </Container>
                        <Section style={{ padding: 14 }}>
                            <Text className="text-center">&copy; Copyright 2025 - SiemReapShuttleBus</Text>
                            <Row>
                                <Column align="center">
                                    <Link href="https://siemreapshuttlebus/terms-condition" className='text-sm'>Terms & Conditions</Link>
                                </Column>
                                <Column align="center">
                                    <Link href="https://siemreapshuttlebus/privacy-policy" className='text-sm'>Privacy Policy</Link>
                                </Column>
                            </Row>
                        </Section>
                    </Body>
            </Tailwind>
        </Html>
    )
};

EmailTemplate.PreviewProps = {
    name: "Chenter",
    total: "35",
    issuedDate: "May 22, 2025 20:00",
    ticketType: "Airplane Ticket",
    price: "35",
    passager: 3,
    phone: "0964903404",
    email: "chenterphai@gmail.com",
    orderRef: "SR-123456",
} satisfies EmailTemplateProps;


const header = {
    backgroundColor: colorPrimary,
    padding: 16
}

const container = {
    overflow: "hidden",
    marginBottom: 12,
    borderRadius: 20,
    border: "1px solid #E5E7EB",
}