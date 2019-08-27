import React from 'react'
import styled from 'styled-components'
import { Card, Table } from 'reactstrap'
import { Text } from '../../../components'
import theme from '../../../constants/theme'

const Root = styled(Card)`
  padding: 10px;
`

const InfoList = ({ label, value }) => {
  return (
    <tr>
      <td><Text color={theme.color.grey}>{label}</Text></td>
      <td><Text>{value}</Text></td>
    </tr>
  )
}

const ProfileInfo = ({ account }) => {
  const {
    address, company, email, phone, website,
  } = account

  return (
    <Root>
      <Table>
        <tbody>
          <InfoList label="Email" value={email} />
          <InfoList label="Phone" value={phone} />
          <InfoList
            label="Address"
            value={(
              <>
                <Text as="label">Street: {address.street}</Text><br />
                <Text as="label">Suite: {address.suite}</Text><br />
                <Text as="label">City: {address.city}</Text><br />
                <Text as="label">Zipcode: {address.zipcode}</Text><br />
                <Text as="label">Geo: lat:{address.geo.lat} lng:{address.geo.lng}</Text><br />
              </>
            )}
          />
          <InfoList label="Website" value={website} />
          <InfoList
            label="Company"
            value={(
              <>
                <Text as="label">Name: {company.name}</Text><br />
                <Text as="label">Catch Phrase: {company.catchPhrase}</Text><br />
                <Text as="label">bs: {company.bs}</Text><br />
              </>
            )}
          />
        </tbody>
      </Table>
    </Root>
  )
}

export default ProfileInfo
