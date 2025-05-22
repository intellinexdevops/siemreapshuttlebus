// import Image from 'next/image';
import * as React from 'react';
import {
    Font,
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
    Hr
} from "@react-email/components";

interface EmailTemplateProps {
    name: string;
    total?: string;
    issuedDate?: string;
    ticketType?: string;
    price?: string;
    passager?: number;
    phone?: string;
    email?: string;
}

const colorPrimary = "#1C6AE4";
const colorText = "#262626";

// const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL
const imageUrl = "https://siemreapshuttlebus.netlify.app/"

export default async function EmailTemplate({
    name = "Chenter",
    total = "35",
    issuedDate = "May 22, 2025 20:00",
    ticketType = "Airplane Ticket",
    price = "35",
    passager = 3,
    phone = "0964903404",
    email = "chenterphai@gmail.com"
}: EmailTemplateProps) {
    return (
        <Html>
            <Head>
                <Font fontFamily="Arial" fallbackFontFamily="Arial" />
            </Head>

            <Body>
                <Container style={container}>
                    <Container style={header}>
                        <Section>
                            <Container>
                                <Img
                                    src={`${imageUrl}bus_icon.svg`}
                                    alt='Logo'
                                    width={60}
                                    height={60}
                                    loading='lazy'
                                />
                            </Container>
                            <Text style={{ fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#ffffff" }}>Siem Reap Shuttle Bus</Text>
                            <Text style={{ fontSize: 18, color: "white", fontWeight: "600", lineHeight: 1 }} >Confirm!</Text>
                            <Container>
                                <Text style={{ fontSize: 18, color: "white", fontWeight: "600", lineHeight: 0 }}>Hello {name},</Text>
                                <Text style={{ fontSize: 14, color: "white", lineHeight: 1 }}>Your booking is successfully complete!</Text>
                            </Container>
                        </Section>
                    </Container>

                    <Section style={{ padding: 16, }} >
                        <Row width="100%">
                            <Column colSpan={2}>
                                <Text style={{ lineHeight: 1, fontSize: 16, color: "gray" }}>TOTAL</Text>
                                <Text style={{ lineHeight: 0, color: colorPrimary, fontSize: 17, fontWeight: "500" }}>${parseFloat(total!).toFixed(2)}</Text>
                            </Column>
                            <Column>
                                <Text style={{ lineHeight: 1, fontSize: 16, color: "gray" }}>Issued Date</Text>
                                <Text style={{ lineHeight: 0, color: colorText, fontSize: 17 }}>{issuedDate}</Text>
                            </Column>
                        </Row>
                    </Section>


                    <Hr />

                    <Container style={{ padding: 14, marginTop: 12 }}>
                        <Text style={{ color: colorText, lineHeight: 0, fontSize: 20, fontWeight: "600" }}>Your Booking</Text>
                        <Section>
                            <Row align='center'>
                                <Column width={50} align='left'>
                                    <Container style={{ backgroundColor: "#1C6AE410", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6 }}>
                                        <Img
                                            src={`${imageUrl}ticket.svg`}
                                            width={28}
                                            height={28}
                                        />
                                    </Container>
                                </Column>
                                <Column colSpan={2}>
                                    <Container style={{ marginLeft: 12 }}>
                                        <Text style={{ color: "gray", lineHeight: 1, fontSize: 16 }} >{ticketType}</Text>
                                        <Link href={process.env.NEXT_PUBLIC_BOOKING_DETAIL_URL as string} style={{ cursor: "pointer" }}>
                                            <Text style={{ lineHeight: 0, fontSize: 13, marginTop: -4 }} >Details</Text>
                                        </Link>
                                    </Container>
                                </Column>
                                <Column align='right'>
                                    <Row>
                                        <Column align='right'>
                                            <Text style={{ lineHeight: 0, fontSize: 16, color: "gray" }}>{passager}</Text>
                                        </Column>
                                        <Column align='right'>
                                            <Text style={{ lineHeight: 0, fontSize: 16, color: "gray" }}>&times;</Text>
                                        </Column>
                                        <Column align='right'>
                                            <Text style={{ lineHeight: 0, fontSize: 16, color: "gray" }}>${parseFloat(price!).toFixed(2)}</Text>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                        </Section>
                    </Container>

                    <Hr />


                    <Section style={{ paddingLeft: 14, paddingRight: 14 }}>
                        <Row>
                            <Column>
                                <Text style={{ lineHeight: 0, fontSize: 16, color: "gray" }}>Subtitle:</Text>
                            </Column>
                            <Column align='right'>
                                <Text style={{ lineHeight: 0, fontSize: 16, color: colorText }}>${parseFloat(total!).toFixed(2)}</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Container>
                                    <Row>
                                        <Column>
                                            <Text style={{ lineHeight: 0, fontSize: 16, color: colorText }}>Total: </Text>
                                        </Column>
                                        <Column>
                                            <Text style={{ lineHeight: 0, color: "gray" }}>(Including VAT)</Text>
                                        </Column>
                                    </Row>
                                </Container>
                            </Column>
                            <Column align='right'>
                                <Text style={{ lineHeight: 0, fontSize: 16, color: colorText, fontWeight: "600" }}>${parseFloat(total!).toFixed(2)}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Hr />

                    <Container style={{ padding: 14, marginTop: 12 }}>
                        <Text style={{ color: colorText, lineHeight: 0, fontSize: 20, fontWeight: "600" }}>Customer Information</Text>
                        <Container style={{ marginTop: 24 }} >
                            <Section>
                                <Row align='left'>
                                    <Column align='left'>
                                        <Container align='left' width="50%">
                                            <Row align='left'>
                                                <Column align='left' width={46}>
                                                    <Container style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C6AE410", borderRadius: 99, marginRight: 10 }}>
                                                        <Img
                                                            src={`${imageUrl}user.svg`}
                                                            width={20}
                                                            height={20}
                                                            alt='Username'
                                                        />
                                                    </Container>
                                                </Column>
                                                <Column>
                                                    <Text style={{ lineHeight: 0, fontSize: 13, color: "gray" }}>Name</Text>
                                                    <Text style={{ lineHeight: 0.5, fontSize: 14, color: colorText }}>{name}</Text>
                                                </Column>
                                            </Row>
                                        </Container>
                                    </Column>
                                    <Column>
                                        <Container>
                                            <Row>
                                                <Column align='left' width={46}>
                                                    <Container style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C6AE410", borderRadius: 99, marginRight: 10 }}>
                                                        <Img
                                                            src={`${imageUrl}phone.svg`}
                                                            width={20}
                                                            height={20}
                                                            alt='Phone'
                                                        />
                                                    </Container>
                                                </Column>
                                                <Column>
                                                    <Text style={{ lineHeight: 0, fontSize: 13, color: "gray" }}>Phone Number</Text>
                                                    <Text style={{ lineHeight: 0.5, fontSize: 14, color: colorPrimary, textDecoration: "underline" }}>{phone}</Text>
                                                </Column>
                                            </Row>
                                        </Container>
                                    </Column>
                                </Row>

                                <Row>
                                    <Column align='left'>
                                        <Container align='left' style={{ marginTop: 13 }}>
                                            <Row align='left'>
                                                <Column align='left' width={46}>
                                                    <Container style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C6AE410", borderRadius: 99, marginRight: 10 }}>
                                                        <Img
                                                            src={`${imageUrl}email.svg`}
                                                            width={20}
                                                            height={20}
                                                            alt='email'
                                                        />
                                                    </Container>
                                                </Column>
                                                <Column>
                                                    <Text style={{ lineHeight: 0, fontSize: 13, color: "gray" }}>Email</Text>
                                                    <Text style={{ lineHeight: 0.5, fontSize: 14, color: colorPrimary, textDecoration: "underline" }}>{email}</Text>
                                                </Column>
                                            </Row>
                                        </Container>
                                    </Column>
                                </Row>
                            </Section>
                        </Container>
                    </Container>

                    <Hr />

                    <Container style={{ padding: 14, marginTop: 12 }}>
                        <Text style={{ color: colorText, lineHeight: 0, fontSize: 20, fontWeight: "600" }}>Support</Text>
                        <Container style={{ marginTop: 24 }} >
                            <Section>
                                <Row align='left'>
                                    <Column align='left'>
                                        <Container align='left'>
                                            <Row align='left'>
                                                <Column align='left' width={46}>
                                                    <Container style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C6AE410", borderRadius: 99, marginRight: 10 }}>
                                                        <Img
                                                            src={`${imageUrl}email.svg`}
                                                            width={20}
                                                            height={20}
                                                            alt='Our Email'
                                                        />
                                                    </Container>
                                                </Column>
                                                <Column>
                                                    <Text style={{ lineHeight: 0, fontSize: 13, color: "gray" }}>Phone</Text>
                                                    <Text style={{ lineHeight: 0.5, fontSize: 14, color: colorText }}>066 810 555 / 085 86 14 24</Text>
                                                </Column>
                                            </Row>
                                        </Container>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <Container style={{ marginTop: 12 }}>
                                            <Row>
                                                <Column align='left' width={46}>
                                                    <Container style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1C6AE410", borderRadius: 99, marginRight: 10 }}>
                                                        <Img
                                                            src={`${imageUrl}phone.svg`}
                                                            width={20}
                                                            height={20}
                                                            alt='Phone'
                                                        />
                                                    </Container>
                                                </Column>
                                                <Column>
                                                    <Text style={{ lineHeight: 0, fontSize: 13, color: "gray" }}>Email</Text>
                                                    <Text style={{ lineHeight: 0.5, fontSize: 14, color: colorPrimary, textDecoration: "underline" }}>contact@sr-airportbus.com</Text>
                                                </Column>
                                            </Row>
                                        </Container>
                                    </Column>
                                </Row>
                            </Section>
                        </Container>
                    </Container>
                </Container>
            </Body>
        </Html>
    )
};


const header = {
    backgroundImage: `url("${imageUrl}email-bg.svg")`,
    padding: 16
}

const container = {
    overflow: "hidden",
    marginBottom: 12,
    borderRadius: 12
}

// className = 'overflow-hidden rounded-lg border mb-3'